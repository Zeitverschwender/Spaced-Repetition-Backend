const express = require("express");
const passport = require("passport");
const router = express.Router();
const controller = require("../controllers/auth");

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const sessionToken = req.sessionID;
    const redirectURL = process.env.AUTH_REDIRECT + sessionToken;
    res.redirect(redirectURL);
  }
);

router.get("/logout", controller.logout);

module.exports = router;
