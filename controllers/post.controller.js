const Post = require("../models/post.model");

exports.getAllPosts = async (req, res, next) => {
  try {
    let [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts: posts });
  } catch (error) {
    next(error.message);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);

    post = await post.save();

    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let [post, _] = await Post.findById(id);

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};
