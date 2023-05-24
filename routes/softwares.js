var express = require('express');
var router = express.Router();
const lib = require('../private/library');

router.get('/:software', function(req, res, next) {
  if (lib.url.hasOwnProperty(req.params.software)) {
    const urlValue = req.params.software;
    const breadcrumb = lib.lang.en.softwares[urlValue].software_title.toUpperCase();
    res.render('softwares', { urlValue: urlValue, lib: lib, breadcrumb: breadcrumb });
  } else {
    const breadcrumb = null; // Set default value when software is not found
    res.render('softwares', { urlValue: urlValue, lib: lib, breadcrumb: breadcrumb });
  }
});

module.exports = router;