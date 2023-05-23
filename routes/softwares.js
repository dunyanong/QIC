var express = require('express');
var router = express.Router();
const lib = require('../private/library');

/* GET software page */
router.get('/:software', function(req, res, next) {
  // Check if the software exists in the URL object
  if (lib.url.hasOwnProperty(req.params.software)) {
    // Assign the value of 'software' to 'urlValue'
    const urlValue = req.params.software;
    res.render('softwares', { urlValue: urlValue, lib: lib });
  } else {
    res.status(404).send('Software not found');
  }
});

module.exports = router;