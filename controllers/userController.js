const { User } = require('../models');

module.exports = {
    // Create a new user
    async createUser(req, res){
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Get all users
    async getAllUsers(req, res){
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Get user by ID
    async getUserById(req, res){
        try {
            const user = await User.findOne({ _id: req.params.id })

            if(!user){
                res.json({ message: 'Could not locate a user by that ID.' });
            }

            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Update a user
    async updateUser(req, res){
        try {
            const userUpdate = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            )

            if(!userUpdate){
                res.json({ message: 'Could not locate a user by that ID to update.' });
            }

            res.json(userUpdate);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Delete a user
    async deleteUser(req, res){
        try {
            const destroyUser = await User.findByIdAndDelete({ _id: req.params.id });

            if(!destroyUser){
                res.json({ message: 'Could not delete any user by that ID.' });
            }

            res.json('User was deleted!');
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    }
}