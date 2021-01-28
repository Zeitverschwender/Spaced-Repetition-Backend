const RepeatingInterval = require("../models/RepeatingInterval");
const Session = require("../models/Session")
const User = require("../models/User")

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
  getGlobalRepeatingIntervals: async (req, res) => {
    try {
      const intervals = await RepeatingInterval.find();
      res.json(intervals);
    } catch (err) {
      res.json(err);
    }
  },
  getUserRepeatingIntervals: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token);
      res.json(currUser.customIntervals);
    } catch (err) {
      res.json(err);
    }
  },
  getSingleUserRepeatingInterval: async(req,res) => {
    try {
      const currUser = await getUserFromToken(req.params.token);
      res.json(currUser.customIntervals.id(req.params.intervalID));
    } catch (err) {
      res.json(err);
    }
  },
  createUserRepeatingInterval: async (req, res) => {
    const interval = new RepeatingInterval({
      title: req.body.title,
      description: req.body.description,
      days: req.body.days,
    });
    try {
      const currUser = await getUserFromToken(req.params.token);
      currUser.customIntervals.push(interval);
      await currUser.save();
      res.json(interval);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteUserRepeatingInterval: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token);
      currUser.customIntervals.id(req.params.intervalID).remove();
      currUser.save();
    } catch (err) {
      res.json(err);
    }
  },
  updateUserSpecificInterval: async (req, res) => {
    try {
      const currUser = await getUserFromToken(req.params.token)
      const intervalToUpdate = currUser.customIntervals.id(req.params.intervalID);
      intervalToUpdate.set(req.body);
      currUser.save();
      res.json(intervalToUpdate);
    } catch (err) {
      res.json(err);
    }
  },
};
