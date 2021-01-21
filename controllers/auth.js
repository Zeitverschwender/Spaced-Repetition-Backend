const User = require("../models/User");
const passport = require("passport");

module.exports = {
  authenticateLogin: () => {
    passport.authenticate("google", { scope: ["profile"] });
  },

  callbackRedirect: () => {
    passport.authenticate("google", { failureRedirect: "/" }),
      (req, res) => {
        res.redirect("/");
      };
  },
  logout: () => {
      req.logout()
      res.redirect('/')
  }
};
