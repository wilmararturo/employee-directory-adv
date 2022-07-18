require("dotenv").config();
require("./config/passport");

const express = require("express");
const session = require("express-session");
const path = require("path");
const passport = require("passport");
const routes = require("./controllers");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: "hammer apple toothpaste",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

// turn on routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
