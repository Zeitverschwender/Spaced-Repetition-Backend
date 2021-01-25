const mongoose = require('mongoose');
const RepeatingInterval = require('./RepeatingInterval');
const RepeatingItem = require('./RepeatingItem');


const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        required: true,
    },
    displayName:{
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    repeatingItems: {
        type: [RepeatingItem.schema]
    },
    customIntervals:{
        type: [RepeatingInterval.schema]
    }


});

module.exports = mongoose.model('User', UserSchema);