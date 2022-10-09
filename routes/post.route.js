const express = require("express");
const postRouter = express.Router();
const postControllers = require("../controllers/post.controller");

postRouter.route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

postRouter.get("/:id", postControllers.getPostById);

module.exports = postRouter;
