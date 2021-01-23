const mongoose = require("mongoose");

const RepeatingIntervalSchema = mongoose.Schema(
  {
    title: {
      desc: "Interval Title",
      type: String,
      required: true,
      trim: true,
      maxLength: 128
    },
    description: {
      desc: "Interval Description",
      type: String,
      trim: true,
      maxLength: 520
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
