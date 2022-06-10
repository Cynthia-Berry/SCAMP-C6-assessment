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

module.exports = {userRecord};
