const Session = require("../models/Session");
const User = require("../models/User");

const getSession = async (token) => {
  const currSession = await Session.findOne({ _id: token });
  if (currSession == null) {
    const err = new Error(
      "The authorization token is not valid. You should try logging in again."
    );
    err.status = 401;
    throw err;
  }
  return currSession
}
module.exports = {
  getSession,
  getUser: async (token) => {
    const currSession = await getSession(token);
    const sessionJson = JSON.parse(currSession.session);
    const currUser = User.findById(sessionJson.passport.user);
    if (currUser == null) {
      const err = new Error(
        "The user account was not found. You should try logging in again."
      );
      err.status(403);
      throw err;
    }
    return currUser;
  },
  checkVarNotNull: (variable, message) => {
    if (variable == null) {
      const err = new Error(message);
      err.status = 400;
      return next(err);
    }
  },
};
