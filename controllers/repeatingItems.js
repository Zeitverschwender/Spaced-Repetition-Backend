const RepeatingItem = require("../models/RepeatingItem");
const helperFunctions = require("./helperFunctions");

module.exports = {
  getRepeatingItems: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      res.json(currUser.repeatingItems);
    } catch (err) {
      return next(err);
    }
  },
  getSpecificRepeatingItem: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      const currItem = currUser.repeatingItems.id(req.params.itemID);
      helperFunctions.checkVarNotNull(currItem, "Item ID is not valid");
      res.json(currItem);
    } catch (err) {
      return next(err);
    }
  },
  createRepeatingItem: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      helperFunctions.checkVarNotNull(
        req.body.interval,
        "interval is a required field."
      );
      helperFunctions.checkVarNotNull(
        req.body.title,
        "title is a required field."
      );
      const item = new RepeatingItem(req.body);
      currUser.repeatingItems.push(item);
      await currUser.save();
      res.json(item);
    } catch (err) {
      return next(err);
    }
  },
  deleteRepeatingItem: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      const currItem = currUser.repeatingItems.id(req.params.itemID);
      helperFunctions.checkVarNotNull(currItem, "Item ID is not valid");
      currItem.remove();
      currUser.save();
      res.json("Item deleted successfully.");
    } catch (err) {
      return next(err);
    }
  },
  updateSpecificItem: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      const itemToUpdate = currUser.repeatingItems.id(req.params.itemID);
      helperFunctions.checkVarNotNull(itemToUpdate, "Item ID is not valid");
      itemToUpdate.set(req.body);
      currUser.save();
      res.json(itemToUpdate);
    } catch (err) {
      return next(err);
    }
  },
};
