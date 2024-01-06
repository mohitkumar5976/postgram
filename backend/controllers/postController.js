const { Post } = require("../models/Post");
const { User } = require("../models/User");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.newPost = async (req, res) => {
  try {

    const file = req.files.postImage;

    const user = await User.findById(req.user._id);

    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      const post = new Post({
        caption: req.body.caption,
        userId: user._id,
        postImage: result.url,
      });
      if (!post) {
        return res.status(400).json({ message: "something went wrong" });
      }
      post.save()
      user.posts.push(post._id);
      user.save();
      return res.status(200).json({message: "post added" });
    });
    
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("userId comments.userId");

    if (!posts) {
      return res.status(400).json({ message: "no posts" });
    }
    return res.status(200).json({ data: posts });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getPost = async (req, res) => {
  let post;

  try {
    post = await Post.findById({ _id: req.params.id });
  } catch (error) {
    console.log(error.message);
  }

  if (!post) {
    return res.status(400).json({ message: "no post" });
  }
  return res.status(200).json({ data: post });
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      desc: req.body.desc,
    });

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }
    if (post.userId.toString() != req.user._id.toString()) {
      return res.status(401).json({ message: "unable to update the post" });
    }
    post.save();
    return res.status(200).json({ message: "updated post" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    if (post.userId.toString() != req.user._id.toString()) {
      return res.status(401).json({ message: "unauthorized" });
    }

    await post.deleteOne();

    const user = await User.findById(req.user._id);
    const index = user.posts.indexOf(req.params.id);
    user.posts.splice(index, 1);
    await user.save();
    return res.json({ message: "post deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.likeAndDislike = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    if (post.likesAndDislike.includes(req.user._id)) {
      const index = post.likesAndDislike.indexOf(req.user._id);
      post.likesAndDislike.splice(index, 1);
      await post.save();
      return res.status(200).json({ message: "post unliked" });
    } else {
      post.likesAndDislike.push(req.user._id);
      await post.save();

      return res.status(200).json({ message: "post liked" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.postComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({ message: "post not found !!" });
    }

    let commonexists = -1;
    console.log(req.user._id);

    post.comments.forEach((item, index) => {
      if (item.userId.toString() === req.user._id.toString()) {
        commonexists = index;
      }
    });

    if (commonexists !== -1) {
      post.comments[commonexists].message = req.body.comment;
      post.save();
      return res.status(200).json({ message: "comment updated" });
    } else {
      post.comments.push({
        userId: req.user._id,
        message: req.body.comment,
      });
    }
    post.save();

    return res.status(200).json({ message: "comment added" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
