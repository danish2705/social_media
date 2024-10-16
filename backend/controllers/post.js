const Post = require("../Models/post");
const User = require("../Models/User");
exports.createPost = async (req, res) => {
  try {
    const newPostData = {
      caption: req.body.caption,
      image: {
        public_id: "req.body.public_id",
        url: "req.body.url",
      },
      owner: req.user._id,
    };

    const newPost = await Post.create(newPostData);
    const user = await User.findById(req.user._id);
    user.post.push(newPost._id);
    await user.save();
    res.status(201).json({
      status: "success",
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.likeAndUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "No post found",
      });
    }
    if (post.likes.includes(req.user.id)) {
      const index = post.likes.indexOf(req.user.id);
      post.likes.splice(index, 1);
      await post.save();

      return res.status(200).json({
        success: true,
        message: "Post Unlike",
      });
    } else {
      post.likes.push(req.user.id);
      await post.save();
      return res.status(200).json({
        status: "pass",
        message: "Post liked",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        status: "fail",
        message: "Unauthorized",
      });
    }

    await post.remove();

    const user = await User.findById(req.user._id);
    const index = user.post.indexOf(req.params.id);
    user.post.splice(index, 1);
    await user.save();
    res.status(200).json({
      status: "pass",
      message: "post deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getpostOffFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const posts = await Post.find({
      owner: {
        $in: user.following,
      },
    });
    res.status(200).json({
      status: "pass",
      posts,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateCaption = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        status: "fail",
        message: "unauthorised",
      });
    }
    post.caption = req.body.caption;
    await post.save();
    res.status(200).json({
      status: "pass",
      message: "post updated",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
