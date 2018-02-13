const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    multipleStatements: true,
    database : 'westwd'
});

connection.connect();

module.exports = connection;