var express = require('express');
var router = express.Router();
const url =  {
  b2b_multivendor_marketplace: "b2b_multivendor_marketplace",
  b2c_multivendor_marketplace: "b2c_multivendor_marketplace",
  b2c_b2b_marketplace: "b2c_b2b_marketplace",
  online_pharmacy: "online_pharmacy",
  e_commerce_platform: "e_commerce_platform",
  tele_consult_platform: "tele_consult_platform",
  super_mobile_app: "super_mobile_app",
  health_forums: "health_forums",
  healthcare_artificial_intelligence: "healthcare_artificial_intelligence",
  health_centres: "health_centres",
  content_management_system: "content_management_system",
  erp_hms: "erp_hms",
  customer_experience_management: "customer_experience_management",
  big_data_analytics: "big_data_analytics",
  infra_cloud_cybersecurity: "infra_cloud_cybersecurity",
  robotic_process_automation: "robotic_process_automation",
  healthcare_iot: "healthcare_iot",
  seo_digital_marketing: "seo_digital_marketing",
}

/* GET software page */
router.get('/:software', function(req, res, next) {
  const software = req.params.software;
  
  // Check if the software exists in the URL object
  if (url.hasOwnProperty(software)) {
    res.render('softwares', { software: url[software] });
  } else {
    res.status(404).send('Software not found');
  }
});

module.exports = router;