const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller.js");

router.route("/accountSettings").get(adminController.accountSettings);

router.route("/saved").get(adminController.saved);
