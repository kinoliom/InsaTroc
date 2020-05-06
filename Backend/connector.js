var mysql = require('mysql');
 
console.log('Get connection ...');
 
var conn = mysql.createConnection({
  database: 'insatroc',
  host: "localhost",
  user: "root",
  password: "12345"
});

conn.connect(function(err) {
	if (err) throw err,
	
	console.log("Connected !");
	//var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  //con.query(sql, function (err, result) {
   // if (err) throw err;
    //console.log("1 record inserted");
  //});
});
 
 
