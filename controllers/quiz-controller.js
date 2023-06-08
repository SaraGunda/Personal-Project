const express = require("express");

module.exports = {
  results: (request, response) => {
    response.render("pages/results");
  },

  quiz: (request, response) => {
    response.render("pages/quiz");
  },

  results_post: (request, response) => {
    console.log(request.body);
    const score =
      Number(request.body.age) +
      Number(request.body.activityLevel) +
      Number(request.body.injury) +
      Number(request.body.goal) +
      Number(request.body.frequency);
    console.log(score);
    response.render("pages/results", {
      score: score,
    });
  },
};

// login > directly to quiz > acctpage
// travel = document.querySelector('input[name = "travel"]:checked').value;
