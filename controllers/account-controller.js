const data = require("../data/data");

module.exports = {
  accountSettings: (request, response) => {
    response.render("pages/accountSettings", {
      data: data,
    });
  },
  account: (request, response) => {
    const id = request.params.id;
    const foundUser = data.find((user) => user._id === String(id));
    console.log(foundUser);
    response.render("pages/account", {
      data: foundUser,
    });
  },
  saved: (request, response) => {
    response.render("pages/saved");
  },
};

// is authenticated?
// how to store results?
// where to transform results into playlist?
