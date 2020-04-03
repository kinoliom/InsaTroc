//const mariadb = require('mariadb');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'dbuser',
	database:'my_db'
})

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err,rows,fields){
	if(err) throw err;
	console.log('The solution is: ',rows[0].solution)
})

connection.end();

/*
mariadb.createConnection({
	user:"root",
	database:"db",
	host:"localhost",
	port:3306
	})
	.then(conn=>{
		console.log("Connected successful");
		conn.end();
	})
	.catch(err=>{
		console.log("Error: " + err.message);
	});

*/
