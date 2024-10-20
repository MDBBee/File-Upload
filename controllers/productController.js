const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const prod = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ prod });
};

const getAllProducts = async (req, res) => {
  const prods = await Product.find({});
  res.status(StatusCodes.OK).json({ prods });
};

module.exports = { createProduct, getAllProducts };
