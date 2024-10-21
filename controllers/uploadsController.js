const { StatusCodes } = require("http-status-codes");
const cloudinary = require("cloudinary").v2;
const path = require("path");
const {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
} = require("../errors/index");

const uploadProductImageLocal = async (req, res) => {
  if (!req.files) throw new BadRequestError("Please chosse a file!");

  const image = req.files.image;

  if (!image.mimetype.startsWith("image/j"))
    throw new BadRequestError(
      "Please choose the appropriate file type: image/jpeg"
    );

  if (image.size > 1024 * 1024)
    throw new BadRequestError("Image file too large! na wa ooh!!!");

  const imagePath = path.resolve(__dirname, `../public/uploads/${image.name}`);

  await image.mv(imagePath);

  res.status(StatusCodes.OK).json({ image: { src: `/uploads/${image.name}` } });
};

const uploadProductImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload-app",
    }
  );
  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = { uploadProductImage };
