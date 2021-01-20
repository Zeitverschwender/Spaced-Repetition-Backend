const RepeatingItem = require("../models/RepeatingItem");

module.exports = {
  getRepeatingItems: async (req, res) => {
    try {
      const items = await RepeatingItem.find();
      res.json(items);
    } catch (err) {
      res.json(err);
    }
  },
  getSpecificRepeatingItem: async (req, res) => {
    try {
      const item = await RepeatingItem.findById(req.params.itemID);
      res.json(item);
    } catch (err) {
      res.json(err);
    }
  },
  createRepeatingItem: async (req, res) => {
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
  },
  deleteRepeatingItem: async (req, res) => {
    try {
      const itemToDelete = await RepeatingItem.deleteOne({
        _id: req.params.itemID,
      });
      res.json(itemToDelete);
    } catch (err) {
      res.json(err);
    }
  },
  updateSpecificItem: async (req, res) => {
    try {
      const itemToUpdate = await RepeatingItem.updateOne(
        { _id: req.params.itemID },
        { $set: { title: req.body.title } }
      );
      res.json(itemToUpdate);
    } catch (err) {
      res.json(err);
    }
  }
};
