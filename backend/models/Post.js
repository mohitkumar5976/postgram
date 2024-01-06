const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    caption: {
      type: String,
      maxlength: 120,
    },
    postImage: {
      type: String,
    },
    likesAndDislike: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        userId: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },

        message: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
