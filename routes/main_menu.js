const express = require('express'),
    router = express.Router(),
    connection = require('../etc/env');

router.get('/', function(req, res) {
    connection.query('SELECT * FROM menu', function (err, menu) {
        if (err) throw err;
        res.json(menu);
    });
});

module.exports = router;