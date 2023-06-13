const { MongoUnexpectedServerResponseError } = require("mongodb");
const { domainToASCII } = require("url");
const User = require("../models/user-model");

module.exports = {
  account_get: (request, response) => {
    const { _id } = request.params;
    User.findOne({ _id: _id }).then((user) => {
      response.render("pages/account", {
        data: user,
      });
    });
  },
  // saved: (request, response) => {
  //   response.render("pages/saved");
  // },
};

// to do: account page set up, apply hamburger menu
