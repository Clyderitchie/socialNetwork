const { Post } = require('../models');

module.exports = {
    // Create a post (Working)
    async newPost(req, res){
        try {
            const newPost = await Post.create(req.body);
            res.json(newPost);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Get all post (Working)
    async allPost(req, res){
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Get a single users post (Working)
    async userPosts(req, res){
        try {
            const usersPost = await Post.findById({ _id: req.params.id });
            
            if(!usersPost){
                res.json({ message: 'Could not find that users post by the ID.' });
            }

            res.json(usersPost);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Update a post (Working)
    async updatePost(req, res){
        try {
           const updatePost = await Post.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
           ); 

           if(!updatePost){
            res.json({ message: 'Could not locate any post by that ID to update' });
        }

        res.json(updatePost);
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    },
    // Delete a post (Working)
    async deletePost(req, res){
        try {
            const deletePost = await Post.findByIdAndDelete({ _id: req.params.id });

            if(!deletePost){
                res.status(404).json({ message: 'Could not delete post with that ID.' });
            }

            res.json({ message: 'Post was deleted!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err.message);
        }
    }
}