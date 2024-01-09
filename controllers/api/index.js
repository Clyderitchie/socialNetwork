const router = require('express').Router();
const adminRoutes = require('./adminRoutes');

router.use('/admins', adminRoutes);

module.exports = router;
