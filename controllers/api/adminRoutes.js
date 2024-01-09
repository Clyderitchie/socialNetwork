const router = require('express').Router();

const { Admin } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const adminInfo = await Admin.create(req.body);

        res.status(200).json(adminInfo);
    } catch (err) {
        console.log("/api/admins/", err);
        res.status(500).json(err.message);
    }
})

module.exports = router;