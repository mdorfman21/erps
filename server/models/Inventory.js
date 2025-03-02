("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.Sku = Inventory.belongsTo(models.Sku, {
        as: "Skus",
        foreignKey: "id",
      });
    }
  }
  Inventory.init(
    {
      revision: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Inventory",
    }
  );
  Inventory.sync({ force: true })
    .then(() => {
      console.log("yes re-sync done!");
    })
    .catch((e) => console.log("Can't syncronize", e));

  return Inventory;
};
