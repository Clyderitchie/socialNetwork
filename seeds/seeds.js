const sequelize = require('../config/connection');
const { Admin, Users } = require('../models');

const adminData = require('./adminData.json');
const userData = require('./userData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const admin = await Admin.bulkCreate(adminData, {
        individualHooks: true,
        returning: true,
    });

    const users = await Users.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });


};

seedDatabase();