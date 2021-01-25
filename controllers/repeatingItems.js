const RepeatingItem = require("../models/RepeatingItem");
const Session = require("../models/Session");
const User = require("../models/User");

const getUserFromToken = async(token) => {
  try{
    const currSession = await Session.findOne({'_id':token});
    const sessionJson =  JSON.parse(currSession.session);
    const currUser =  User.findById(sessionJson.passport.user);
    return currUser
  } catch(err) {
    res.json(err)
  }
}

module.exports = {
  
  getRepeatingItems: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token);
      res.json(currUser.repeatingItems);
    } catch (err) {
      res.json(err);
    }
  },
  getSpecificRepeatingItem: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token);
      const item = currUser.repeatingItems.id(req.params.itemID);
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
      const currUser = await getUserFromToken(req.params.token);
      currUser.repeatingItems.push(item);
      await currUser.save();
      res.json(item);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteRepeatingItem: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token);
      currUser.repeatingItems.id(req.params.itemID).remove();
      currUser.save();
    } catch (err) {
      res.json(err);
    }
  },
  updateSpecificItem: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token)
      const itemToUpdate = currUser.repeatingItems.id(req.params.itemID);
      itemToUpdate.set({
        title: req.body.title
      })
      currUser.save();
      res.json(itemToUpdate);
    } catch (err) {
      res.json(err);
    }
  },
  
};
