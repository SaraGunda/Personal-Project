// define quiz data
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;
let GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const resultsSchema = new Schema({
  warmup: {
    type: String,
  },
  sunA: {
    type: String,
  },
  sunB: {
    type: String,
  },
  cardio: {
    type: String,
  },
  balance: {
    type: String,
  },
  floorStretch: {
    type: String,
  },
  supineAndShavasana: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", resultsSchema);
async function run() {
  await mongoose.connect(`${process.env.DB_URL}`);
  mongoose.model("User", resultsSchema);
  await mongoose.model("User").findOne();
}
run();

passport.use(User.createStrategy());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        "https://nice-teal-kitten-sari.cyclic.app/auth/google/admin-console",
    },
    function (accessToken, refreshToken, email, cb) {
      console.log(email);
      User.findOrCreate(
        { googleId: email.id, username: email.displayName },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

module.exports = User;

