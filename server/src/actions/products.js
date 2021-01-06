const db = require("../../db-config.js");
const { cloudinaryUpload } = require("../middleware/cloudinary.js");
const { dataUri } = require("../middleware/datauri.js");

const getProducts = () => {
  return db("products");
};

const getProductById = (id) => {
  return db("products").returning("*").where(id, "product.id");
};

const imageUpload = async (image) => {
  try {
    const file64 = dataUri(image);
    const uploadResponse = await cloudinaryUpload(file64.content);
    const dbResult = await db("images").returning("*").insert({
      title: uploadResponse.public_id,
      cloudinary_id: uploadResponse.secure_url,
      img_url: uploadResponse.url,
    });

    return dbResult;
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (image, product) => {
  const file64 = dataUri(image);
  const uploadResponse = await cloudinaryUpload(file64.content);

  db.transaction((trx) => {
    trx
      .insert({
        image_url: uploadResponse.url,
      })
      .into("images")
      .returning("image_url")
      .then((imgurl) => {
        return db("products").returning("*").insert({
          imgurl: imgurl[0],
          product_name: product.name,
          price: product.price,
          category: product.category,
          quantity: product.quantity,
        });
      })
      .then(trx.commit)
      .catch(trx.catch);
  }).catch((err) => console.log(err));
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

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  imageUpload,
};
