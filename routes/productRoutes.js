const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const { uploadsController } = require("../controllers/uploadsController");
