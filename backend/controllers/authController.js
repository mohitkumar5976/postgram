const { User } = require("../models/User");
const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret:process.env.CLOUDINARY_SECRET,

});

const generateToken = (userId) => {
  return Jwt.sign({ _id: userId }, process.env.JWT_SECRET_KEY);
};

exports.signUp = async (req, res) => {
  try {
    const {name,email,password}=req.body
    const file = req.files.photo;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "data already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    cloudinary.uploader
      .upload(file.tempFilePath, (err, result) => {
    
        user = new User({
          name,
          email,
          password: hashedPassword,
          photo: result.url,
        });

        user.save().then((result) => {
          let token = generateToken(result._id);
          return res
            .status(200)
            .cookie("token", token, {
              expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
              httpOnly: true,
            })
            .json({ data: "user registered" });
        }).catch((err) => console.log(err.message));
      })
     
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })
      .select("+password")
      .populate("followers following");

    if (!user) {
      return res.status(400).json({ message: "User doesn't exists" });
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(400).json({ message: "password doesn't match" });
    }

    let token = generateToken(user._id);
    const { _id, name, followers, following, photo } = user;

    return res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
      })
      .json({
        message: "logged In",
        data: {
          id: _id,
          name,
          followers,
          following,
          photo,
        },
      });
  } catch (error) {
    console.log(error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
