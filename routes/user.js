const express = require("express");
const router = express.Router();
const controller = require("../controllers/User");

router.get("/name/:token", controller.getUserName);
router.get("/photo/:token",controller.getUserPhoto);
router.get("/status/:token",controller.getUserStatus);

module.exports = router;
