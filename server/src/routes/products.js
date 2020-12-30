const express = require("express");
const multer = require("multer");

const db = require("../../db-config.js");
const upload = multer();

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  imageUpload,
  getProductById,
} = require("../actions/products.js");

const router = express.Router();

router.get("/", (req, res) => {
  return db("products").then((data) => res.json(data));
});

// get the products
router.get("/list", (req, res, next) => {
  return getProducts()
    .then((products) => res.json(products))
    .catch((err) => next(err));
});

// add products
router.post("/add", upload.single("image"), (req, res, next) => {
  const { file } = req;
  console.log(file);
  console.table(req.body);
  //  upload the image
  if (file) {
    // if there's an image
    imageUpload(file)
      .then((result) => {
        res.status(200).json({
          status: "success",
          result,
        });
      })
      .catch((err) =>
        res.status(400).json({
          status: "error",
          message: err.message,
        })
      );
  } else {
    // if there's no image
    res.status(400).json({
      status: "Failed",
      message: "No image file was selected",
    });
  }
});

// update products
router.put("/update", (req, res, next) => {
  updateProduct(req.body)
    .then((product) => res.json({ product }))
    .catch((err) => next(err));
});

router.delete("/delete", (req, res, next) => {
  const { id } = req.body.product.id;
  return getProductById(id).then((product) => {
    if (product) {
      console.log(product);
      deleteProduct(product)
        .then(() => res.json({ msg: "product deleted successfully" }))
        .catch((err) => {
          // res.status(400).json("Could not delete product");
          console.log(err);
        });
    } else {
      res.status(404).send({ message: "product not found" });
    }
  });
});

module.exports = router;
