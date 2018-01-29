var fs = require('fs'),
    mysql = require('mysql'),
    express = require('express'),
    ejs = require('ejs'),
    app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'westwd',
    multipleStatements: true
});

connection.connect();

app.set('view engine' , 'ejs');
app.use('/public', express.static('public'));

app.get('/portfolio',function (req, res) {
    connection.query('SELECT * FROM progect ORDER by type; SELECT * FROM menu', [1,2], function (err, row) {
        if (err) throw err;
        res.render('catalog', {menu: row[1] , post: row[0]});
    });

});

app.get('/portfolio/:ids',function (req, res) {
    var targetId = req.params.ids;
    connection.query('SELECT * FROM progect WHERE id= ?; SELECT * FROM menu', [targetId, 1,2], function (err, row) {
        if (err) throw err;
        console.log(row[0]);
        res.render('product-page', {
            post: row[0][0],
            menu: row[1]
        })
    });
});

app.listen(80);



