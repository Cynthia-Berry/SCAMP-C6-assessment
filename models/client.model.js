const {DataTypes} = require('sequelize');
const db = require('../config/database');


const clientSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    },
    invoice_id: {
        type: DataTypes.STRING,
        foreignKey: true,
    }
}

const Client = db.define('client', clientSchema,);

module.exports = Client;