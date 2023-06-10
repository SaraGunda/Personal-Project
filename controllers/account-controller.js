const { MongoUnexpectedServerResponseError } = require("mongodb");
const { domainToASCII } = require("url");
const data = require("../data/data");

module.exports = {
  accountSettings: (request, response) => {
    response.render("pages/accountSettings", {
      data: data,
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
    Users.findOne({ _id: _id }).then((users) => {
      response.render("pages/account", {
        data: users,
      });
    });
  },
  saved: (request, response) => {
    response.render("pages/saved");
  },
};


// to do: account page set up, apply hamburger menu