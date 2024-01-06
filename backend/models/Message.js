const mongoose = require("mongoose");

const userMessage = mongoose.Schema(
  {
    message: {
      type: String,
    },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const UserMessage = mongoose.model("UserMessage", userMessage);

module.exports = { UserMessage };
