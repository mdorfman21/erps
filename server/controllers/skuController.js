const Sku = require("../models/sku");

exports.getAllSkus = async (req, res) => {
  try {
    const skus = Sku.findAll();
    res.json(skus);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
