const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/postCtrl");

router.route('/').post(postCtrl.createPost).get(postCtrl.getPost);

module.exports = router