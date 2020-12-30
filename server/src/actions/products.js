const db = require("../../db-config.js");
const streamifier = require("streamifier");

const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getProducts = () => {
  return db("products");
};

const getProductById = (id) => {
  return db("products").returning("*").where(id, "product.id");
};

const addProduct = (product) => {
  return db("products").returning("*").insert({
    product_name: product.product_name,
    price: product.price,
    category: product.category,
    quantity: product.quantity,
  });
};

const updateProduct = (product) => {
  return db("products").update({
    product_name: product.product_name,
    price: product.price,
    category: product.category,
    quantity: product.quantity,
  });
};

const deleteProduct = (id) => {
  // return db("products").where(id, "product.id").del();
  console.log(id);
};

// const imageUpload = (image) => {
//   return cloudinary.uploader.upload(image).then((result) =>
//     db("images").returning("*").insert({
//       title: result.original_filename,
//       cloudinary_id: result.secure_url,
//       img_url: result.url,
//     })
//   );
// };

const imageUpload = (image) => {
  const cloudinaryOptions = {
    resource_type: "raw",
    folder: "",
  };
  return new Promise((resolve, reject) => {
    let upload_stream = cloudinary.uploader.upload_stream(
      cloudinaryOptions,
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    streamifier.createReadStream(image.buffer).pipe(upload_stream);
  }).then((result) =>
    db("images")
      .returning("*")
      .insert({
        title: result.original_filename,
        cloudinary_id: result.secure_url,
        img_url: result.url,
      })
      .catch((error) => {
        throw new Error(error);
      })
  );
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  imageUpload,
};
