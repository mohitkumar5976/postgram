const express = require("express");
const router = express.Router();
const { signUp, login, logout } = require("../controllers/authController");

router.post("/register",signUp);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
