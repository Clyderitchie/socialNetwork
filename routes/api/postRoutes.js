const router = require('express').Router();

const {
    newPost,
    allPost,
    userPosts,
    updatePost,
    deletePost
} = require('../../controllers/postController');

//  /api/posts 
router.route('/')
    .get(allPost) // (Working)
    .post(newPost); // (Working)

// /api/posts/:id
router.route('/:id')
    .get(userPosts) // (Working)
    .put(updatePost) // (Working)
    .delete(deletePost); // (Working)

module.exports = router;