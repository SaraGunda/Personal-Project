const adminController = require('./admin-controller.js');


module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      X.find({}).then((X) => {
        response.render("pages/admin", {
          data: X,
        });
      });
    } else {
      response.redirect("/login");
    }
  },

  admin_edit: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/collections/edit");
    } else {
      response.redirect("/login");
    }
  },
};
