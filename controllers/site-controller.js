const express = require("express");

module.exports = {
  index: (request, response) => {
    response.render("pages/index");
  },
  about: (request, response) => {
    response.render("pages/about");
  },
  glossary: (request, response) => {
    response.render("pages/glossary");
  }
};

// // SITE ROUTES
// router.route('/')
//     .get(siteController.index);

// // router.route('/about')
// //     .get(siteController.about);

// router.route('/login')
//     .get(siteController.login)
//     .post(siteController.login_post);

// router.route('/logout')
//     .get(siteController.logout);

// router.route('/register')
//     .get(siteController.register_get)
//     .post(siteController.register_post);

// router.route('/auth/google')
//   .get(siteController.google_get);

// router.route('/auth/google/admin-console')
//   .get(siteController.google_redirect_get)

// module.exports = router;
