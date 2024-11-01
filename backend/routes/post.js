const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getpostOffFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/upload").post(isAuthenticated, createPost);
router.route("/like/:id").get(isAuthenticated, likeAndUnlikePost);
router.route("/delete/:id").delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getpostOffFollowing);
router.route("/updateCaption/:id").put(isAuthenticated, updateCaption);
router.route("/comment/:id").put(isAuthenticated, commentOnPost);
router.route("/deleteComment/:id").delete(isAuthenticated, deleteComment);

module.exports = router;
