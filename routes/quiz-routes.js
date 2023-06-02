const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz-controller.js");


router.route("/results").get(quizController.results);

module.exports = router;
