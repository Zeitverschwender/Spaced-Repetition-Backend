const mongoose = require("mongoose");

const RepeatingIntervalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    global: {
      type: Boolean,
      default: false,
    },
    days: {
      type: [Number],
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("RepeatingInterval", RepeatingIntervalSchema);
