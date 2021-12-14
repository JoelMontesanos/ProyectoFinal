var express = require('express');
var router = express.Router();
var paymentController = require('../controllers/payment.controller');
var middleware = require('../middleware');


router.use(middleware); //it was commented originally

router.get('/promos',  paymentController.getPromos);

module.exports = router;
