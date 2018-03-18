const   express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path'),
        app = express(),
        port = 80;

const posts  = require('./routes/posts');
const main_menu  = require('./routes/main_menu');
const services  = require('./routes/services');

app.use(express.static(path.join(__dirname, './client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

app.use('/posts', posts);
app.use('/services', services);
app.use('/main_menu', main_menu);

module.exports = app;

app.listen(port);
console.log('Nodejs start at http://localhost:' + port);



