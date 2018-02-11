const express = require('express'),
    mysql = require('mysql'),
    router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '44321',
    multipleStatements: true,
    database : 'westwd'
});

connection.connect();

router.get('/', function(req, res) {
    connection.query('SELECT * FROM progect ORDER by type', function (err, post) {
        if (err) throw err;
        res.json(post);
    });
});

module.exports = router;