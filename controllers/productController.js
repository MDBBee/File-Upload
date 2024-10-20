const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.status(StatusCodes.CREATED).send("createproduct");
};

const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).send("getAllProducts");
};

module.exports = { createProduct, getAllProducts };
