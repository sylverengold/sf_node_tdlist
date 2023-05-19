// config connexion BBD mySQL

let mysql = require('mysql');
let connection = mysql.createConnection({
	host : 'localhost',
	user : 'sf',
	password : 'secret',
	database : 'sf_node_tdlist'
});

connection.connect();

module.exports = connection