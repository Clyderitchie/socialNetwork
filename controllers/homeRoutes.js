const router = require('express').Router();
const { Admin, Users } = require('../models')

// Renders homepage 
router.get('/', async (req, res) => {
    try {
        const userData = await Users.findAll();
        const user = userData.map(p => p.get({ plain: true }));
        res.render('homepage', {
            ...user
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err.message);
    }
});

module.exports = router; 