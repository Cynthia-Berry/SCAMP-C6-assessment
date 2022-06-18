const {DataTypes} = require('sequelize');
const db = require('../middlewares/config/database');

const Token = db.define('token', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  token: {
    type: DataTypes.STRING,
  },
});

module.exports = Token
