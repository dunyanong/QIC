var express = require('express');
var router = express.Router();
const lib = require('../private/library');

router.get('/:software', function(req, res, next) {
  // Replaces "-" with "_"
  const softwareParam = req.params.software.replace(/-/g, '_');
  
  // To check if the clicked url matches the right object
  if (lib.lang.en.softwares.hasOwnProperty(softwareParam)) {
    const urlValue = softwareParam;
    const breadcrumb = lib.lang.en.softwares[urlValue].software_title.toUpperCase();
    res.render('softwares', { urlValue: urlValue, lib: lib, breadcrumb: breadcrumb });
  } else {
    const breadcrumb = null; // Set default value when software is not found
    res.render('softwares', { urlValue: req.params.software, lib: lib, breadcrumb: breadcrumb });
  }
});


module.exports = router;