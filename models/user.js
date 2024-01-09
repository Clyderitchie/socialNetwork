const { Model, DataTypes, DATE } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
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
        modelName: 'users',
    }
);

module.exports = Users