const { MongoUnexpectedServerResponseError } = require("mongodb");
const { domainToASCII } = require("url");
const User = require("../models/user-model");

module.exports = {
  accountSettings: (request, response) => {
    response.render("pages/accountSettings", {
      data: user,
    });
  },
  // account: (request, response) => {
  //   const id = request.params.id;
  //   const foundUser = data.find((user) => user._id === String(id));
  //   console.log(foundUser);
  //   response.render("pages/account", {
  //     data: foundUser,
  //   });
  // },
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
