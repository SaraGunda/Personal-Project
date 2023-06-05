const data = require("../data/data");

module.exports = {
  accountSettings: (request, response) => {
    response.render("pages/accountSettings", {
      data: data,
    });
  },
  account: (request, response) => {
    response.render("pages/account", {
      data: data,
    });
  },
  saved: (request, response) => {
    response.render("pages/saved");
  },
};

// is authenticated?
// how to store results?
// where to transform results into playlist?
