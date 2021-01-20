const mongoose = require("mongoose");

const RepeatingItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    interval: {
      type: mongoose.Schema.Types.ObjectId,
      reference: 'RepeatingInterval',
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
