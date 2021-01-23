const RepeatingInterval = require("../models/RepeatingInterval");

module.exports = {
  getRepeatingIntervals: async (req, res) => {
    try {
      const intervals = await RepeatingInterval.find();
      res.json(intervals);
    } catch (err) {
      res.json(err);
    }
  },
  getSpecificRepeatingInterval: async (req, res) => {
    try {
      const interval = await RepeatingInterval.findById(req.params.intervalID);
      res.json(interval);
    } catch (err) {
      res.json(err);
    }
  },
  createRepeatingInterval: async (req, res) => {
    const interval = new RepeatingInterval({
      title: req.body.title,
      description: req.body.description,
      days: req.body.days,
    });
    try {
      const savedInterval = await interval.save();
      res.json(savedInterval);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteRepeatingInterval: async (req, res) => {
    try {
      const intervalToDelete = await RepeatingInterval.deleteOne({
        _id: req.params.intervalID,
      });
      res.json(intervalToDelete);
    } catch (err) {
      res.json(err);
    }
  },
  updateSpecificInterval: async (req, res) => {
    try {
      const intervalToUpdate = await RepeatingInterval.updateOne(
        { _id: req.params.intervalID },
        { $set: { title: req.body.title } }
      );
      res.json(intervalToUpdate);
    } catch (err) {
      res.json(err);
    }
  },
};
