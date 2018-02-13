const express = require('express'),
    router = express.Router(),
    connection = require('../etc/env');

router.get('/', function(req, res) {
    connection.query('SELECT * FROM menu', function (err, post) {
        if (err) throw err;
        res.json(post);
    });
});

module.exports = router;