const statusCode = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  res.status(statusCode.StatusCodes.CREATED).send("uploadProductImage");
};

module.exports = { uploadProductImage };
