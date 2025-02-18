const express = require("express");
const router = express.Router();
const skuController = require("../controllers/skuConroller");
// Route to get all skus
router.get("/", skuController.getAllSkus);
router.post("/create", skuController.createSku);

module.exports = router;
