const e = require("express");

module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect("/login");
    } else {
      return next();
    }
  },
  refreshSession: (req, res, next) => {
    req.session._garbage = Date();
    req.session.touch();
    next();
  },
};
