const { StatusCodes } = require("http-status-codes");
const path = require("path");

const uploadProductImage = async (req, res) => {
  const image = req.files.image;
  const imagePath = path.resolve(__dirname, `../public/uploads/${image.name}`);

  await image.mv(imagePath);

  res.status(StatusCodes.OK).json({ image: { src: `/uploads/${image.name}` } });
};

module.exports = { uploadProductImage };
