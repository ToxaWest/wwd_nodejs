const   express = require('express'),
        ejs = require('ejs'),
        bodyParser = require('body-parser'),
        app = express();

const posts  = require('./routes/posts');

app.set('view engine' , 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

app.use('/posts', posts);

app.use(function(req, res) {
    var err = new Error('Not Found');
    err.status = 404;
});

module.exports = app;

app.listen(3001);



