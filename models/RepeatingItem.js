const mongoose = require('mongoose');

const RepeatingItemSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    days: {
        type: [Number],
        required: true,
    }

},{
    strict: true,
    versionKey: false,
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
})

module.exports = mongoose.model('RepeatingItems',RepeatingItemSchema)