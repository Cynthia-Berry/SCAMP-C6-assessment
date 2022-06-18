const {DataTypes} = require('sequelize');
const db = require('../middlewares/config/database');


const invoiceSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    invoiceRef: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    is_paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    discount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    charge: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    balance: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
}

const Invoice = db.define('invoice', invoiceSchema);

module.exports = Invoice;