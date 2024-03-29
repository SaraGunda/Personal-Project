const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;
let GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  // results:{
  // type: [],
  // }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
async function run() {
  await mongoose.connect(`${process.env.DB_URL}`);
  mongoose.model("User", userSchema);
  await mongoose.model("User").findOne();
}
run();

passport.use(User.createStrategy());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});
// may need to change back

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
      callbackURL: "https://jade-glorious-haddock.cyclic.app/auth/google/user-account",
    },
    function (accessToken, refreshToken, email, cb) {
      console.log(email);
      User.findOrCreate(
        { googleId: email.id, email: email.displayName },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

module.exports = User;
