const { Sequelize, DataTypes } = require('sequelize');
const db = require("../db")

const Product = db.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeproduct: {
    type: DataTypes.STRING,
    allowNull: false

  }
});
module.exports = Product;
