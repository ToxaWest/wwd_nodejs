const express = require('express'),
    router = express.Router(),
    connection = require('../etc/env');

router.get('/', function(req, res) {
    connection.query('SELECT * FROM uslugi', function (err, services) {
        if (err) throw err;
        res.json(services);
    });
});

module.exports = router;