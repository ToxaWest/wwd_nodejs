const   express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path'),
        app = express(),
        port = 3000;

const posts  = require('./routes/posts');
const services  = require('./routes/services');

app.use(express.static(path.join(__dirname, './client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/posts', posts);
app.use('/services', services);

module.exports = app;

app.listen(port);
console.log('Nodejs start at http://localhost:' + port);



