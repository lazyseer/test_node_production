var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World!, prod by lazyseer', email: process.env.GMAIL_ID });
});

module.exports = router;
