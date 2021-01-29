const RepeatingItem = require("../models/RepeatingItem");
const helperFunctions = require("./helperFunctions");

module.exports = {
  getUserName: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      res.send(currUser.displayName);
    } catch (err) {
      return next(err);
    }
  },
  getUserPhoto: async (req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      res.send(currUser.photo);
    } catch (err) {
      return next(err);
    }
  },
  getUserStatus: async(req, res, next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      res.send('Logged In');
    }
    catch (err) {
      if (err.status === 401 || err.status == 404){
        res.send('Logged Out');
      }
      else{
        return next(err);
      }
    }
  }
};
