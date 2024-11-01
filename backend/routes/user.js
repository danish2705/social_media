const express = require("express");
const {
  signUp,
  logIn,
  followUser,
  logOut,
  updatePassword,
  updateProfile,
  deleteProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/signUp").post(signUp);
router.route("/logIn").post(logIn);
router.route("/logout").get(logOut);
router.route("/updatePassword").put(isAuthenticated, updatePassword);
router.route("/updateProfile").put(isAuthenticated, updateProfile);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/deleteProfile").delete(isAuthenticated, deleteProfile);
router.route("/myProfile").get(isAuthenticated, myProfile);
router.route("/getProfile/:id").get(isAuthenticated, getUserProfile);
router.route("/getAllUsers").get(isAuthenticated, getAllUsers);
router.route("/forgotPassword").post(forgotPassword);
router.route("/password/reset/:id").put(resetPassword);

module.exports = router;
