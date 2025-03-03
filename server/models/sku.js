("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sku.Inventories = Sku.hasMany(models.Inventory);
    }
  }
  Sku.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Sku",
    }
  );
  Sku.sync({ force: true })
    .then(() => {
      console.log("yes re-sync done!");
    })
    .catch((e) => console.log("Can't syncronize", e));

  return Sku;
};
