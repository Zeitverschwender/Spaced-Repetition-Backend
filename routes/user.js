const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.get("/name/:token", controller.getUserName);
router.get("/photo/:token",controller.getUserPhoto);

module.exports = router;
