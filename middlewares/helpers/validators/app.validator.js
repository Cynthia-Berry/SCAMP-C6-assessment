const Joi = require('Joi');

const userRecord = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(15).required(),
    password: Joi.string().min(8).required().messages({
        "string.min": `Password should have a minimum length of 8 characters`,
        "string.base": `Password should have an uppercase, lowercase and digit`,
        "string.pattern.base": `Password should have an uppercase, lowercase and digit`,
        "string.empty": `Password cannot be empty`,
        "string.required": `Password is required`,
    }),
    confirmPassword: Joi.ref('password'),
});

const clientRecord = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(15).required(),
    organization: Joi.string().max(15).required(),
});

const invoiceRecord = Joi.object({
    invoiceRef: Joi.string().required(),
    balance: Joi.number(),
    is_paid: Joi.string().required(),
    discount: Joi.string().email().required(),
    charge: Joi.string().max(15).required(),
});

module.exports = {userRecord, clientRecord, invoiceRecord};
