const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz-controller.js");

router.route("/:_id").get(quizController.quiz);

router.route("/results").get(quizController.results);

router.route("/results/:_id").post(quizController.results_post);

module.exports = router;


// 6484c664514284a53e0bdaee