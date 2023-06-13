const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account-controller.js");

// router.route("/accountSettings").get(accountController.accountSettings);

router
  .route("/account/:_id")
  //   .get(accountController.account)
  .get(accountController.account_get);

// router.route("/saved").get(accountController.saved);

module.exports = router;
