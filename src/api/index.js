const express = require('express');

const agent = require('./agent');
const visa = require('./visa');
const payment = require('./payment');
const crms = require('./crms');
const contacts = require('./contactus');

const router = express.Router();

router.use('/agent', agent);
router.use('/visa', visa);
router.use('/payment', payment);
router.use('/crms', crms);
router.use('/contact', contacts);


module.exports = router;
