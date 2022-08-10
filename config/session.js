require("dotenv").config();
const session = require("express-session");
const crypto = require("crypto");
const RedisStore = require("connect-redis")(session);
const redisClient = require("./redis");

const serverSession = session({
  genid: function (req) {
    return crypto.randomBytes(32).toString("hex");
  },
  store: new RedisStore({ client: redisClient }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 600000, secure: false },
});

module.exports = serverSession;
