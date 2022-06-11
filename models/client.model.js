const {DataTypes} = require('sequelize');
const db = require('../config/database');


const clientSchema = {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}

const Client = db.define('ClientModel', clientSchema);

module.exports = Client;