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
  getUserName: async(req, res) => {
    const currUser = await getUserFromToken(req.params.token);
    res.send(currUser.displayName);
  },
  getUserPhoto: async(req, res) => {
    const currUser = await getUserFromToken(req.params.token);
    res.send(currUser.image);
  }
};
