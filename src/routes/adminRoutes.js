// adminRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

// Get all products for admin
router.get("/admin/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new product
router.post("/admin/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;