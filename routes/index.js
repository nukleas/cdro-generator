var express = require('express');
var router = express.Router();
var cdrogen = require('../app/CDROGenerator.js');
/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    var cdro = cdrogen.getGeneratedCdro();
    res.render('index', {title: 'Express', cdro: cdro});
});

router.get('/cdrogen.json', function (req, res) {
    'use strict';
    res.json({result: cdrogen.getGeneratedCdro()});
});

module.exports = router;
