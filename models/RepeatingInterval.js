const mongoose = require("mongoose");

const RepeatingIntervalSchema = mongoose.Schema(
  {
    title: {
      desc: "Interval Title",
      type: String,
      required: true,
      trim: true,
    },
    description: {
      desc: "Interval Description",
      type: String,
      trim: true,
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
