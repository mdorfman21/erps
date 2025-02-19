const db = require("../models");
const SKU = db.SKU;
const { Op } = require("sequelize");

exports.getAllSkus = async (req, res) => {
  try {
    const skus = SKU.findAll();
    res.json(skus);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createSku = async (req, res) => {
  try {
    const sku = await SKU.create({
      name: req.body.name,
      price: req.body.price,
    });
    console.log("sku created", sku);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
