const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
    _id: {
        type: String
    },
    expires: {
        type: Date
    },
    session: {
        type: String
    }
}
);

module.exports = mongoose.model("Session", SessionSchema);
