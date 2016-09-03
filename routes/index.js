var express = require('express');
var fs      = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.send(fs.readFileSync('./index.html'));
});



module.exports = router;
