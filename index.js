var mysql = require('mysql'),
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

var headerPromise = new Promise(function (resolve, reject) {

    connection.query('SELECT * FROM menu', function (err, row) {
        if (err) throw err;
        app.render('blocks/header', { menu:row}, function (opts, header) {
            resolve(header);
        });
    });

});

app.get('/portfolio',function (req, res) {
    connection.query('SELECT * FROM progect ORDER by type', function (err, row) {
        if (err) throw err;
        headerPromise.then(function (header) {
            res.render('catalog', { post: row, header: header});
        })
    });

});

app.get('/portfolio/:ids',function (req, res) {
    var targetId = req.params.ids;
    connection.query('SELECT * FROM progect WHERE id= ?; SELECT * FROM menu', [targetId], function (err, row) {
        if (err) throw err;
        console.log(row[0]);
        res.render('product-page', {
            post: row[0][0],
            menu: row[1]
        })
    });
});

app.listen(3000);



