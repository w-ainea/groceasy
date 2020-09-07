const products = [
  {
    id: 1,
    name: "Kale",
    price: 20,
    imgUrl: "https://i.ibb.co/NxdWrSF/kale.jpg",
    sellerId: 1,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Brocolli",
    price: 20,
    imgUrl: "https://i.ibb.co/2YyzGJn/broccoli.jpg",
    sellerId: 2,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Avocado",
    price: 20,
    imgUrl: "https://i.ibb.co/FhGC6gf/avocado.jpg",
    sellerId: 3,
    categoryId: 2,
  },
  {
    id: 4,
    name: "Bananas",
    price: 10,
    imgUrl: "https://i.ibb.co/qs3V67g/bananas.jpg",
    sellerId: 4,
    categoryId: 2,
  },
  {
    id: 5,
    name: "Carrots",
    price: 10,
    imgUrl: "https://i.ibb.co/mG2cCZr/carrots.jpg",
    sellerId: 1,
    categoryId: 2,
  },
  {
    id: 6,
    name: "Tomatoes",
    price: 10,
    imgUrl: "https://i.ibb.co/VByCZtT/tomatoes.jpg",
    sellerId: 3,
    categoryId: 2,
  },
];

const categories = [
  {
    title: "Vegetables",
    id: 1,
  },
  {
    title: "Fruits",
    id: 2,
  },
  {
    title: "Spices",
    id: 3,
  },
];

const sellers = [
  {
    name: "Gladys",
    id: 1,
  },
  {
    name: "Josephine",
    id: 2,
  },
  {
    name: "Ann",
    id: 3,
  },
  {
    name: "Jaque",
    id: 4,
  },
];

module.exports = { sellers, products, categories };
