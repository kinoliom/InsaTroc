var express = require('express'); //import de express
var app = express(); //création de l'application Express

//route definition
/* the app.get() method specifies a callback function
 * that will be invoked whenever there is an HTTP GET request
 * with a path '/' relative to the site root
 * the callback function takes a request and a response objects as arguments
 * and simply calls send() on the response to return the string "Hello World"
 */
app.get('/',function(req,res) {
	res.send('Hello World !');
});

/*Starts up the server on port '3000' and prints a log comment to 
 * the console
 * 
 * */
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
