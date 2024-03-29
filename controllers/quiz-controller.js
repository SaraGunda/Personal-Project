const { MongoUnexpectedServerResponseError } = require("mongodb");
const express = require("express");
const User = require("../models/user-model");

module.exports = {
  results: (request, response) => {
    const { _id } = request.params;
    User.findOne({ _id: _id }).then((user) => {
      response.render("pages/results", {
        data: user,
      });
    });
  },

  quiz: (request, response) => {
    const { _id } = request.params;
    User.findOne({ _id: _id }).then((user) => {
      response.render("pages/quiz", {
        data: user,
      });
    });
  },

  results_post: (request, response) => {
    const { _id } = request.params;
    const score =
      Number(request.body.age) +
      Number(request.body.activityLevel) +
      Number(request.body.injury) +
      Number(request.body.goal) +
      Number(request.body.frequency);
    console.log(score);
    User.findOne({ _id: _id }).then((user) => {
      response.render("pages/results", {
        data: user,
        score: score,
      });
    });
  },
};

// login > directly to quiz > acctpage
// travel = document.querySelector('input[name = "travel"]:checked').value;
