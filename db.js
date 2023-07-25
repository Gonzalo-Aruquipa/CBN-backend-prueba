const { Sequelize } = require("sequelize");

const db = new Sequelize("bdcbn", "root", "informatica123", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db
