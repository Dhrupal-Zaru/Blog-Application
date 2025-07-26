const express = require('express');
const { createPost, getAppPosts, deletePost } = require('../controllers/PostController');
const router = express.Router();

router.post('/create', createPost);
router.get('/get', getAppPosts);
router.delete('/delete/:id', deletePost);

module.exports = router;