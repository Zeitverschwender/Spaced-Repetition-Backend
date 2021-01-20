const express = require("express");
const router = express.Router();
const controller =  require('../controllers/repeatingItems')

router.get("/", controller.getRepeatingItems);
router.get("/:itemID", controller.getSpecificRepeatingItem);
router.post("/", controller.createRepeatingItem);
router.delete("/:itemID", controller.deleteRepeatingItem);
router.patch("/:itemID", controller.updateSpecificItem);

module.exports = router;
