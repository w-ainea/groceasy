const db = require("../../db-config.js");
const { cloudinaryUpload } = require("../middleware/cloudinary.js");
const { dataUri } = require("../middleware/datauri.js");

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

const imageUpload = async (image) => {
  try {
    const file64 = dataUri(image);
    console.log(file64.mimetype);
    const uploadResponse = await cloudinaryUpload(file64.content);
    return uploadResponse;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  imageUpload,
};
