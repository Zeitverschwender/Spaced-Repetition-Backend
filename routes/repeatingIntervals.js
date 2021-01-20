const express = require("express");
const router = express.Router();
const controller = require("../controllers/RepeatingIntervals");

router.get("/", controller.getRepeatingIntervals);
router.get("/:intervalID", controller.getSpecificRepeatingInterval);
router.post("/", controller.createRepeatingInterval);
router.delete("/:intervalID", controller.deleteRepeatingInterval);
router.patch("/:intervalID", controller.updateSpecificInterval);

module.exports = router;
