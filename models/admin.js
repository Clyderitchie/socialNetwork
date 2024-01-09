const { Model, DataTypes, DATE } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Admin extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isAlpha: true
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [7]
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newTellerData) => {
                try {
                    newTellerData.password = await bcrypt.hash(newTellerData.password, 10);
                    return newTellerData;
                } catch (err) {
                    console.log(err.message)
                    throw err
                }
            },
            beforeUpdate: async (updatedTellerData) => {
                try {
                    updatedTellerData.password = await bcrypt.hash(updatedTellerData.password, 10);
                    return updatedTellerData;
                } catch (err) {
                    console.log(err.message)
                    throw err
                }
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'admin',
    }
);

module.exports = Admin;