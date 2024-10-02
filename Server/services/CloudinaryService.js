const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (imageData) => {
  try {
    const result = await cloudinary.uploader.upload(imageData);
    console.log(result);
    return result;
  } catch (err) {
    console.error("Image upload failed", err);
    throw new Error("Image upload failed");
  }
};
module.exports = {
  uploadImage,
};
