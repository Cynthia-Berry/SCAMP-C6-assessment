const {Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/database');
// const sequelize = new Sequelize('postgres://postgres:october25th@localhost:5432/payment-reminder');


const userSchema = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_joined: {
        type: DataTypes.DATE
    }
}

const User = db.define('UserModel', userSchema);

module.exports = User;