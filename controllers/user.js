const RepeatingItem = require("../models/RepeatingItem");
const helperFunctions = require("./helperFunctions");

module.exports = {
  getUserName: async(req, res,next) => {
    try {
      const currUser = await helperFunctions.getUser(req.params.token);
      res.send(currUser.displayName);
    }catch (err){
      return next(err)
    }
    
    
  },
  getUserPhoto: async(req, res) => {
    try{
      const currUser = await helperFunctions.getUser(req.params.token);
      res.send(currUser.photo);
    }
    catch{
      return next(err)
    }
  }
};
