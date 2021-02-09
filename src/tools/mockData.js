const products = [
  {
    id: 1,
    product_name: "Kale",
    price: 20,
    imgurl: "https://i.ibb.co/NxdWrSF/kale.jpg",
    quantity: 1,
    user_id: 1,
    category: "Vegetables",
  },
  {
    id: 2,
    product_name: "Brocolli",
    price: 20,
    imgurl: "https://i.ibb.co/2YyzGJn/broccoli.jpg",
    quantity: 2,
    user_id: 1,
    category: "Vegetables",
  },
  {
    id: 3,
    product_name: "Avocado",
    price: 20,
    imgurl: "https://i.ibb.co/FhGC6gf/avocado.jpg",
    quantity: 3,
    user_id: 2,
    category: "Fruits",
  },
  {
    id: 4,
    product_name: "Bananas",
    price: 10,
    imgurl: "https://i.ibb.co/qs3V67g/bananas.jpg",
    quantity: 4,
    user_id: 2,
    category: "Fruits",
  },
  {
    id: 5,
    product_name: "Carrots",
    price: 10,
    imgurl: "https://i.ibb.co/mG2cCZr/carrots.jpg",
    quantity: 1,
    user_id: 2,
    category: "Fruits",
  },
  {
    id: 6,
    product_name: "Tomatoes",
    price: 10,
    imgurl: "https://i.ibb.co/VByCZtT/tomatoes.jpg",
    quantity: 3,
    user_id: 2,
    category: "Fruits",
  },
];

const categories = [
  {
    name: "Vegetables",
    id: 1,
    imgurl: "https://i.ibb.co/VByCZtT/tomatoes.jpg",
  },
  {
    title: "Fruits",
    id: 2,
    imgurl: "https://i.ibb.co/VByCZtT/tomatoes.jpg",
  },
  {
    title: "Spices",
    id: 3,
    imgurl: "https://i.ibb.co/VByCZtT/tomatoes.jpg",
  },
];

const sellers = [
  {
    product_name: "Gladys",
    id: 1,
  },
  {
    product_name: "Josephine",
    id: 2,
  },
  {
    product_name: "Ann",
    id: 3,
  },
  {
    product_name: "Jaque",
    id: 4,
  },
];
const sales = [
  {
    productId: 1,
    sales: 400,
  },
  {
    productId: 2,
    sales: 200,
  },
  {
    productId: 3,
    sales: 100,
  },
  {
    productId: 4,
    sales: 500,
  },
  {
    productId: 5,
    sales: 1000,
  },
];

const newProduct = {
  product_name: "",
  price: "",
  user_id: "",
};

module.exports = { newProduct, sellers, products, categories, sales };
