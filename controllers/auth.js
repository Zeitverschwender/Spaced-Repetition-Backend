const helperFunctions = require("./helperFunctions");
const Session = require('../models/Session');

module.exports = {
  logout: async (req, res, next) => {
    try{
      await helperFunctions.getSession(req.params.token);
      await Session.deleteOne({'_id': req.params.token});
      res.send('Logged Out Successfully.')
    } catch (err) {
      return next(err)
    }
  }
};
