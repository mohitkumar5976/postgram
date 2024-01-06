const { User } = require("../models/User");

exports.getUser = async (req, res) => {
  let user;

  try {
    user = await User.findById(req.params.id)
      .populate("followers following posts Notifications")
      .select("-password -email");
  } catch (error) {
    console.log(error.message);
  }

  if (!user) {
    return res.status(400).json({ message: "no user" });
  }
  return res.status(200).json({ user });
};

exports.getAllUsers = async (req, res) => {
  let users;

  try {
    users = await User.find({});

  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(400).json({ message: "no users" });
  }
  return res.status(200).json({ data: users });
};

exports.followUser = async (req, res) => {
  try {
    const userToFollow = await User.findById({ _id: req.params.id });
    const loggedInUser = await User.findById({ _id: req.user._id });
    if (!userToFollow) {
      return res.status(404).json({ message: "user not found" });
    }

    if (loggedInUser.following.includes(userToFollow._id)) {
      const loggedIndex = loggedInUser.following.indexOf(userToFollow._id);
      loggedInUser.following.splice(loggedIndex, 1);
      const userFollowIndex = userToFollow.followers.indexOf(loggedInUser._id);
      userToFollow.followers.splice(userFollowIndex, 1);

      await loggedInUser.save();
      await userToFollow.save();
      return res.status(200).json({ message: "user un-followed" });
    } else {
      loggedInUser.following.push(userToFollow._id);
      userToFollow.followers.push(loggedInUser._id);
      userToFollow.Notifications.push(loggedInUser);

      await loggedInUser.save();
      await userToFollow.save();
      return res.status(200).json({ message: "user followed" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


