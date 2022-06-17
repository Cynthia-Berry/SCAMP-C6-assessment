const bcrypt = require("bcrypt");
const {DataTypes} = require('sequelize');
const db = require('../middlewares/config/database');


const userSchema = {
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
  },
}

const User = db.define('user', userSchema);

module.exports = User;