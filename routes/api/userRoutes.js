const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(getAllUsers) // (Working)
    .post(createUser); // (Working)

// /api/users/:id
router.route('/:id')
    .get(getUserById) // (Working) 
    .put(updateUser) // (Working)
    .delete(deleteUser); // (Working)

module.exports = router