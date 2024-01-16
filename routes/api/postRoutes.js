const router = require('express').Router();

const {
    newPost,
    allPost,
    userPosts,
    updatePost,
    deletePost,
    addComment,
    removeComment
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

// /api/posts/:postId/comments
router.route('/:postId/comments')
    .post(addComment);

// /api/posts/:postId/comments/:commentId
router.route('/postId/comments/:commentId')
    .delete(removeComment);

module.exports = router;