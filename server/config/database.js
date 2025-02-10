const Sequelize = require("sequelize");
module.exports = new Sequelize("erps", "postgres", "root", {
  host: "localhost",
  dialect: "postgres", // Change to your database type
});
