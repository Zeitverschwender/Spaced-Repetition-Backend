const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");

router.get("/google", controller.authenticateLogin);

router.get("/google/callback", controller.callbackRedirect);

router.get("/logout", controller.logout);

module.exports = router;
