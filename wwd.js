const   express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path'),
        fs = require('fs'),
        http = require('http'),
        https = require('https'),
        privateKey  = fs.readFileSync('./sslcert/wwd.com.test.key', 'utf8'),
        certificate = fs.readFileSync('./sslcert/wwd.com.test.cert', 'utf8'),
        credentials = {key: privateKey, cert: certificate},
        app = express(),
        port = 3007,
        SSLport = 3000;


const posts  = require('./routes/posts');
const services  = require('./routes/services');

app.use(express.static(path.join(__dirname, './client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/posts', posts);
app.use('/services', services);

module.exports = app;

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(SSLport);



