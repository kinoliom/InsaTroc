const mariadb = require('mariadb');

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


