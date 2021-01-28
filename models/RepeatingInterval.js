const mongoose = require("mongoose");

const RepeatingIntervalSchema = mongoose.Schema(
  {
    title: {
      desc: "Interval Title",
      type: String,
      required: true,
      trim: true,
      maxLength: 128,
    },
    description: {
      desc: "Interval Description",
      type: String,
      trim: true,
      maxLength: 520,
    },
    days: {
      type: [Number],
      validate: (i) => i == null || i.length > 0,
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
