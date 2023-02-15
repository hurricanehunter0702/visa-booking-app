const express = require("express");
const router = express.Router();
const ContactCtrl = require("../../controllers/crms/ContactCtrl");

router.get("/contact-mails", ContactCtrl.fetch);
router.get("/:id", ContactCtrl.fetchById);
router.delete("/:id", ContactCtrl.remove);

module.exports = router;