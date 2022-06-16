const {DataTypes} = require('sequelize');
const db = require('../middlewares/config/database');


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
        unique: true,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    organization: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const Client = db.define('client', clientSchema,);

module.exports = Client;