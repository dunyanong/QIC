var express = require('express');
var router = express.Router();

/* GET software page */
router.get('/', function(req, res, next) {
  res.render('software');
});

module.exports = router;