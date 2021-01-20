const mongoose = require('mongoose');

const RepeatingItemSchema = mongoose.Schema({
    title:{
        versionKey: false,
        type: String,
        required: true,
        strict: true,
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
    },
    description: {
        type: String,
        
    },
    days: {
        type: [Number],
        required: true,
        strict: true,
        versionKey: false,
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        }
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