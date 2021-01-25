const express = require("express");
const router = express.Router();
const controller =  require('../controllers/repeatingItems')

router.get("/:token",controller.getRepeatingItems);
router.get("/:token/:itemID", controller.getSpecificRepeatingItem);
router.post("/:token", controller.createRepeatingItem);
router.delete("/:token/:itemID", controller.deleteRepeatingItem);
router.patch("/:token/:itemID", controller.updateSpecificItem);

module.exports = router;
