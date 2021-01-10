const express = require("express");
const multer = require("multer");

const db = require("../../db-config.js");
const upload = multer();

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
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
  return addProduct(req.file, req.body)
    .then((result) => res.json({ result }))
    .catch((err) =>
      res.status(400).json({ err, message: "unable to add product" })
    );
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
