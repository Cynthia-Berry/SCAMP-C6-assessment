const {DataTypes} = require('sequelize');
const db = require('../config/database');
const Joi = require("joi");


const invoiceSchema = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    invoiceRef: {
        type: DataTypes.STRING,
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

const Invoice = db.define('InvoiceModel', invoiceSchema);

module.exports = Invoice;