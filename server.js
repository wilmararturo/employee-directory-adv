require("dotenv").config();
require("./config/passport");

const serverSession = require("./config/session");
const hotlink = require("./utils/hotlink");
const helmet = require("helmet");
const ContentSecurityPolicy = require("./config/helmet");
const express = require("express");
const session = require("express-session");
const path = require("path");
const passport = require("passport");
const routes = require("./controllers");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ContentSecurityPolicy);
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
);
app.use(helmet.noSniff());
app.use(serverSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(hotlink);

app.use(express.static(path.join(__dirname, "/public")));

// turn on routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
