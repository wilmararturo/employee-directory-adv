require("dotenv").config();
const session = require("express-session");
const crypto = require("crypto");

const serverSession = session({
  genid: function (req) {
    return crypto.randomBytes(32).toString("hex");
  },
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 600000, secure: false },
});

module.exports = serverSession;
