const express = require("express");

module.exports = {
  results: (request, response) => {
    response.render("pages/results");
  },

  quiz: (request, response) => {
    response.render("pages/quiz");
  },
};

// login > directly to quiz > acctpage
// travel = document.querySelector('input[name = "travel"]:checked').value;
