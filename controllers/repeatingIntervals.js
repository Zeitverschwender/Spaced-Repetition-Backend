const RepeatingInterval = require("../models/RepeatingInterval");
const helperFunctions = require("./helperFunctions");

module.exports = {
  getGlobalRepeatingIntervals: async (req, res, next) => {
    try {
      const intervals = await RepeatingInterval.find();
      res.json(intervals);
    } catch (err) {
      return next(err);
    }
  },
  getUserRepeatingIntervals: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      res.json(currUser.customIntervals);
    } catch (err) {
      return next(err);
    }
  },
  getSingleUserRepeatingInterval: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      const currInterval = currUser.customIntervals.id(req.params.intervalID);
      helperFunctions.checkVarNotNull(currInterval, "Interval ID is not valid");
      res.json(currInterval);
    } catch (err) {
      return next(err);
    }
  },
  createUserRepeatingInterval: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);

      if (req.body.days == null || req.body.days.length < 1) {
        const err = new Error(
          "days is a required field and it's length should be more than zero."
        );
        err.status = 400;
        return next(err);
      }
      helperFunctions.checkVarNotNull(
        req.body.title,
        "title is a required field."
      );
      const interval = new RepeatingInterval(req.body);
      currUser.customIntervals.push(interval);
      await currUser.save();
      res.status(201).json(interval);
    } catch (err) {
      return next(err);
    }
  },
  deleteUserRepeatingInterval: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      const currInterval = currUser.customIntervals.id(req.params.intervalID);
      helperFunctions.checkVarNotNull(currInterval, "Interval ID is not valid");
      currInterval.remove();
      currUser.save();
      res.send("Item deleted.");
    } catch (err) {
      return next(err);
    }
  },
  updateUserSpecificInterval: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      const intervalToUpdate = currUser.customIntervals.id(
        req.params.intervalID
      );
      intervalToUpdate.set(req.body);
      helperFunctions.checkVarNotNull(
        intervalToUpdate,
        "Interval ID is not valid"
      );
      currUser.save();
      res.json(intervalToUpdate);
    } catch (err) {
      return next(err);
    }
  },
};
