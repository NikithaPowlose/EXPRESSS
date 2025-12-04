var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nikitha' });
});

router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'tyguytugtv' });
});

router.get('/login', function(req, res, next) {
  res.render('demo');
});

router.get('/hi', function(req, res, next) {
  res.render('demo');
});

module.exports = router;
