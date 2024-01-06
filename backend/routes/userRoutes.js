const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  followUser

} = require("../controllers/userController");

const { isAuthenticated } = require("../middlewares/auth");
router.get("/", getAllUsers);
router.route("/follow/:id").get(isAuthenticated, followUser)
router.get("/:id", getUser);

module.exports = router;
