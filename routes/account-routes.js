const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account-controller.js");

router.route("/accountSettings").get(accountController.accountSettings);

router.route("/account").get(accountController.account);

router.route("/saved").get(accountController.saved);

module.exports = router;
