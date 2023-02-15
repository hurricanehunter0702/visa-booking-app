const express = require('express');
const router = express.Router();
const ContactusCtrl = require("../controllers/ContactusController");

router.post('/contact-us', ContactusCtrl.Contactus);

module.exports = router;
