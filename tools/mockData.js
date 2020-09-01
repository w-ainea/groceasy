const products = [
  {
    id: 1,
    name: "Kale",
    price: 20,
    sellerId: 1,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Brocolli",
    price: 20,
    sellerId: 2,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Oranges",
    price: 20,
    sellerId: 3,
    categoryId: 2,
  },
  {
    id: 4,
    name: "Bananas",
    price: 10,
    sellerId: 4,
    categoryId: 2,
  },
  {
    id: 5,
    name: "Onions",
    price: 10,
    sellerId: 1,
    categoryId: 2,
  },
  {
    id: 6,
    name: "Tomatoes",
    price: 10,
    sellerId: 3,
    categoryId: 2,
  },
];

const categories = [
  {
    title: "Vegetables",
    categoryId: 1,
  },
  {
    title: "Fruits",
    categoryId: 2,
  },
  {
    title: "Spices",
    categoryId: 3,
  },
];

const sellers = [
  {
    name: "Gladys",
    sellerId: 1,
  },
  {
    name: "Josephine",
    sellerId: 2,
  },
  {
    name: "Ann",
    sellerId: 3,
  },
  {
    name: "Jaque",
    sellerId: 4,
  },
];

module.exports = { sellers, products, categories };
