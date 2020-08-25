const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { products, sellers, categories } = mockData;
const data = JSON.stringify({ products, sellers, categories });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, (err) =>
  err ? console.log(err) : console.log("mock DB created")
);
