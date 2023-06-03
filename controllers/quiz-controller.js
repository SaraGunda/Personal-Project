const express = require("express");

module.exports = {
  results: (request, response) => {
    response.render("pages/results");
  },
  quiz: (request, response) => {
    response.render("pages/quiz");
  },
};
