var express = require('express');
var router = express.Router();
var locationsCtrl =  require('../controllers/locations');
var othersCtrl =  require('../controllers/others');

/**
 * Locations
 */
router.get('/', locationsCtrl.homeList);
router.get('/location', locationsCtrl.locationInfo);
router.get('/location/review/new', locationsCtrl.addReview);


/**
 * Others
 */
router.get('/about', othersCtrl.about);


module.exports = router;
