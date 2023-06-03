const data = require("../data/data");

module.exports = {
  accountSettings: (request, response) => {
    response.render("pages/accountSettings");
  },
  account: (request, response) => {
    response.render("pages/account", {
        data: data
    });
  },
  saved: (request, response) => {
    response.render("pages/saved");
  },
};
