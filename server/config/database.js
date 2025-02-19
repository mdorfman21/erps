const Sequelize = require("sequelize");
module.exports = new Sequelize("erps", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres", // Change to your database type
});
