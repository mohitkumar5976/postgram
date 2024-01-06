const express = require("express");
const router = express.Router();
const {
  newPost,
  getPost,
  getAllPosts,
  updatePost,
  deletePost,
  likeAndDislike,
  postComment,

} = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");


router.route("/post").post(isAuthenticated, newPost);
router.get("/", getAllPosts);
router.route("/liked/:id").get(isAuthenticated, likeAndDislike);
router.route("/comment/:id").post(isAuthenticated,postComment);
router
  .route("/:id")
  .get(isAuthenticated, getPost)
  .put(isAuthenticated, updatePost)
  .delete(isAuthenticated, deletePost);



module.exports = router;
