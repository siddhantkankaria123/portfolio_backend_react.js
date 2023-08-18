const express = require("express");
const router = express.Router();
const saveContactDetails = require("../controller/contactController");
router.post("/contact", saveContactDetails);

module.exports = router;
