var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicios', {
    layout: 'admin/layout'
  });
});

module.exports = router;

