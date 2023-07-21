const express = require("express");
const passport = require("../../passport")

const app = express.Router();

app.post(
  "/signup",
  passport.authenticate("local-signup", {session: false}),
  (req, res) => {
    // sign up
    res.json({
      user: req.user,
    });
  }
);

app.post(
  "/login",
  passport.authenticate("local-login", {session: false}),
  (req, res) => {
    // login
    res.json({
      user: req.user,
    });
  }
);

app.get("/login", function (req, res) {
  res.render("login");
});
app.post("/login/password", (req, res) => {
  console.log(req.headers);
  // res.end();
  res.redirect("/manager")
});

module.exports = app;