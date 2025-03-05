const db = require("../models");
const Sku = db.Sku;
const Inventory = db.Inventory;
const { Op } = require("sequelize");

exports.getAllSkus = async (req, res) => {
  try {
    const skus = await Sku.findAll();
    res.json(skus);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createSku = async (req, res) => {
  try {
    const sku = await Sku.create(
      {
        name: req.body.name,
        price: req.body.price,
        Inventories: [{ amount: req.body.amount, revision: 0 }],
      },
      {
        include: [Inventory],
      }
    );
    res.status(201).json(sku);
    console.log("sku created", sku);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
