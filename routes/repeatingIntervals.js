const express = require("express");
const router = express.Router();
const controller = require("../controllers/RepeatingIntervals");

router.get("/", controller.getGlobalRepeatingIntervals);
router.get("/:token",controller.getUserRepeatingIntervals);
router.get("/:token/:intervalID", controller.getSingleUserRepeatingInterval);
router.post("/:token", controller.createUserRepeatingInterval);
router.delete("/:token/:intervalID", controller.deleteUserRepeatingInterval);
router.patch("/:token/:intervalID", controller.updateUserSpecificInterval);

module.exports = router;
