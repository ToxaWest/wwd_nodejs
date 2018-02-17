const   express = require('express'),
        ejs = require('ejs'),
        bodyParser = require('body-parser'),
        app = express(),
        port = 3001;

const posts  = require('./routes/posts');
const main_menu  = require('./routes/main_menu');
const slider  = require('./routes/slider');
const services  = require('./routes/services');


app.set('view engine' , 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

app.use('/posts', posts);
app.use('/slider', slider);
app.use('/services', services);
app.use('/main_menu', main_menu);

app.use(function(req, res) {
    const err = new Error('Not Found');
    err.status = 404;
});

module.exports = app;

app.listen(port);
console.log('Nodejs start at http://localhost:' + port);



