const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    // maxAge - how long cookie can exist before it automatically expires
    // maxAge = 30 days * 24 hrs/day * 60 min/hr * 60 sec/min * 1000 ms/min
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("we running on", PORT);
});
