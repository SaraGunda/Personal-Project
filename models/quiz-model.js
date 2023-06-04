const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;
let GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const quizSchema = new Schema({
  firstName: {
    type: String,
  },
  age: {
    type: String,
  },
  activityLevel: {
    type: String,
  },
  injury: {
    type: String, 
    // (or array? may have multiple)
  },
  goal: {
    type: String,
  },
  frequency: {
    type: String,
  },
});

// quizSchema.plugin(passportLocalMongoose);
// quizSchema.plugin(findOrCreate);

// // const User = mongoose.model("User", quizSchema);
// // async function run() {
// //   await mongoose.connect(`${process.env.DB_URL}`);
// //   mongoose.model("User", quizSchema);
// //   await mongoose.model("User").findOne();
// // }
// // run();

// // passport.use(User.createStrategy());

// // passport.serializeUser(function (user, cb) {
// //   process.nextTick(function () {
// //     cb(null, { id: user.id, username: user.username, name: user.displayName });
// //   });
// // });

// // passport.deserializeUser(function (user, cb) {
// //   process.nextTick(function () {
// //     return cb(null, user);
// //   });
// // });

// // passport.use(
// //   new GoogleStrategy(
// //     {
// //       clientID: process.env.CLIENT_ID,
// //       clientSecret: process.env.CLIENT_SECRET,
// //       callbackURL:
// //         "https://nice-teal-kitten-sari.cyclic.app/auth/google/admin-console",
// //     },
// //     function (accessToken, refreshToken, email, cb) {
// //       console.log(email);
// //       User.findOrCreate(
// //         { googleId: email.id, username: email.displayName },
// //         function (err, user) {
// //           return cb(err, user);
// //         }
// //       );
// //     }
// //   )
// // );

// module.exports = User;
