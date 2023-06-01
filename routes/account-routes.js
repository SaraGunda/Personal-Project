const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller.js");

router.route("/accountSettings").get(accountController.accountSettings);

router.route("/profile").get.apply(accountController.profile);

router.route("/saved").get(accountController.saved);

// logout?