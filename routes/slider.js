const express = require('express'),
    router = express.Router(),
    connection = require('../etc/env');

router.get('/', function(req, res) {
    connection.query('SELECT * FROM slider', function (err, slider ){
        if (err) throw err;
        res.json(slider);
    });
});

module.exports = router;