const Joi = require('Joi');

const userRecord = Joi.object({
    userId: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(15).required(),
    password: Joi.string(),
    date_joined: Joi.date()
});

const clientRecord = Joi.object({
    clientId: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(15).required(),
});

const invoiceRecord = Joi.object({
    invoiceId: Joi.string().required(),
    invoiceRef: Joi.string().required(),
    balance: Joi.string().required(),
    is_paid: Joi.string().required(),
    discount: Joi.string().email().required(),
    charge: Joi.string().max(15).required(),
});

module.exports = {userRecord, clientRecord, invoiceRecord};
