const mongoose = require("mongoose");

const RepeatingItemSchema = mongoose.Schema(
  {
    title: {
      desc: "Item Title",
      type: String,
      required: true,
      trim: true,
    },
    description: {
      desc: "Item Description",
      type: String,
      trim: true,
    },
    interval: {
      desc: "Item Interval",
      type: mongoose.Schema.Types.ObjectId,
      reference: "RepeatingInterval",
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

module.exports = mongoose.model("RepeatingItem", RepeatingItemSchema);