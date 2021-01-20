const express = require("express");
const router = express.Router();
const RepeatingItem = require("../models/RepeatingItem");

router.get("/", async (req, res) => {
  try {
    const items = await RepeatingItem.find();
    res.json(items);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:itemID", async (req, res) => {
  try {
    const item = await RepeatingItem.findById(req.params.itemID);
    res.json(item);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const item = new RepeatingItem({
    title: req.body.title,
    description: req.body.description,
    interval: req.body.interval,
  });
  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:itemID", async (req, res) => {
  try {
    const itemToDelete = await RepeatingItem.remove({ _id: req.params.itemID });
    res.json(itemToDelete);
  } catch (err) {
    res.json(err);
  }
});

router.patch("/:itemID", async (req, res) => {
  try {
    const itemToUpdate = await RepeatingItem.updateOne(
      { _id: req.params.itemID },
      { $set: { title: req.body.title } }
    );
    res.json(itemToUpdate);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
