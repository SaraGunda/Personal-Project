const express = require("express");
const User = require("../models/user-model");
const data = require("../data/data");
const passport = require("passport");

module.exports = {
  index: (request, response) => {
    response.render("pages/index");
  },
  about: (request, response) => {
    response.render("pages/about");
  },
  glossary: (request, response) => {
    response.render("pages/glossary");
  },
  login_get: (request, response) => {
    response.render("pages/login");
  },
  login_post: (request, response) => {
    const { username, password } = request.body;
    const user = new User({
      username: username,
      password: password,
    });
    // User.findOne({ email: email }).then((foundUser, error) => {
    request.login(user, (error) => {
      if (error) {
        console.log(error);
        response.redirect("/login");
      } else {
        passport.authenticate("local")(request, response, () => {
          response.redirect("/quiz");
        });
      }
    });
  },
  register_get: (request, response) => {
    response.render("pages/register");
  },
  register_post: (request, response) => {
    const { firstName, lastName, username, password } = request.body;
    User.register(
      { firstName: firstName, lastName: lastName, username: username },
      password,
      (error, user) => {
        if (error) {
          console.log(error);
          response.redirect("/register");
        } else {
          passport.authenticate("local")(request, response, () => {
            response.redirect("/login");
          });
        }
      }
    );
  },
  logout: (request, response) => {
    request.logout(function (err) {
      if (err) {
        return next(err);
      }
      response.redirect("/");
    });
  },

  google_get: passport.authenticate("google", {
    scope: ["openid", "profile", "email"],
  }),
  google_redirect_get: [
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (request, response) {
      response.redirect("/quiz");
    },
  ],
};
