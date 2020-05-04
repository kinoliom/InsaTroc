const express = require('express');
const bodyParser = require('body-parser'); //permet de formater les données en JSON
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var id=0;


const category = {
	"Chambre":1,
	"Cuisine":2,
	"Salle de bain":3,
	"Bureau":4,
	"Loisirs/Sport":5,
	"Autre":6
}

function attributeID(category){
	var categoryID;
	switch (category){
		case "Chambre":
			categoryID = 1;
		break;
		case "Cuisine":
			categoryID = 2;
		break;
		case "Salle de bain":
			categoryID = 3;
		break;
		case "Bureau":
			categoryID = 4;
		break;
		case "Loisirs/Sport":
			categoryID = 5;
		break;
		case "Autre":
			categoryID = 6;
		break;
	}
	return categoryID;
}

const app = express();

app.use((req, res, next) => { //header permettant de communiquer entre les deux serveurs
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());//formate en JSON les données pour n'importe quelle route

// define strategy used by passport
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  // function(username, password, done) {
  //   if(username === "admin" && password === "admin"){
  //     return done(null, username);
  //   } else {
  //     return done("unauthorized access", false);
  //   }
  // }
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));

app.use(passport.initialize());
app.use(passport.session());


// middleware that invokes the next middleware by calling next
// it will authenticate the user using Passport
const auth = () => {
  return (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
      if(error) res.status(400).json({"statusCode" : 200, "message" : error});
      req.login(user, function(error) {
        if(error) return next(error);
        next();
      });
    })(req, res, next);
  }
}

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  }
  return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"});
}

// to facilitate user data storage in the session and retrieving the data on subsequent requests
passport.serializeUser(function(user, done) {
  if(user) done(null, user);
});
passport.deserializeUser(function(id, done) {
  done(null, id);
});

// requête http POST pour l'authentification
app.post('/authenticate/', (req, res) => {
  console.log("requête d\'authentification reçue");
	res.status(200).json({"statusCode" : 200, "message" : "hello"});
});

// requête http POST pour ajouter une nouvelle annonce dans la DB
app.post('/addPost', (req, res, next) => {
	console.log(req.body);  //affiche les éléments de la requête
	req.body._id = id;

	console.log("id : ",req.body._id);
	console.log("Title : ",req.body.title);
	console.log("Description : ",req.body.description);
	console.log("Category : ",req.body.category);
	console.log("Price : ",req.body.price);
	console.log("Urls : ",req.body.urls);

	var catID = attributeID(req.body.category);
	console.log("Category id : ",catID);
	//enlever AnnounceID -> défini dans la DB
	//dans la BD : clé primaire entière qui s'auto incrémente
	//var sql = "INSERT INTO Announce (AnnounceID, Title, Price, Description, CategoryID, PublicationDate) VALUES (id, req.body.title, req.body.price, req.body.description, catID, ??)

	id++;

	res.status(201).json({  //statut "ressource créée"
		message: 'objet créé'
	});

});

// requête http GET pour afficher une annonce spécifique
app.get('/getPost/:id', (req, res, next) => {
  console.log("id de l'annonce demandée : ", req.params.id);
  // aller chercher l'annonce dans la base de données
  res.json({message: 'voilà l\'annonce'});
  // return res.json({post: post});
  // retourner l'annonce au front end
});


app.use((req, res) => { //header permettant de communiquer entre les deux serveurs
  res.json({message:'coucou'});
});


/*
app.use('/addPost', (req, res) => {
  const annonce = [
    {
		_id: string,
      title: string,
      category: string,
      price: number,
      description: string,
      urls : []

    },
  ];
  res.status(200).json(stuff);
});*/




module.exports = app;
