import Cabbage from "../assets/img/cabbage.jpg";

export const products = [
  {
    id: 1,
    category: "vegetables",
    routeName: "veg",
    img: "https://i.ibb.co/3ymHnHk/assorted-vegetables.jpg",
    items: [
      {
        id: 1,
        name: "Cabbages",
        sellerId: 1,
        linkUrl: "/shop/vegetables",
        imgUrl: Cabbage,
        price: 80,
      },
      {
        id: 2,
        name: "Carrots",
        sellerId: 1,
        linkUrl: "/shop/vegetables",
        imgUrl: "https://i.ibb.co/mG2cCZr/carrots.jpg",
        price: 50,
      },
      {
        id: 3,
        name: "Kale",
        sellerId: 1,
        linkUrl: "/shop/vegetables",
        imgUrl: "https://i.ibb.co/NxdWrSF/kale.jpg",
        price: 20,
      },
      {
        id: 4,
        name: "Brocolli",
        sellerId: 1,
        linkUrl: "/shop/vegetables",
        imgUrl: "https://i.ibb.co/2YyzGJn/broccoli.jpg",
        price: 20,
      },
    ],
  },
  {
    id: 2,
    category: "fruits",
    routeName: "fruits",
    img: "https://i.ibb.co/ggTvLTZ/sliced-fruits-on-tray-1132047.jpg",
    items: [
      {
        id: 1,
        name: "Avocado",
        sellerId: 1,
        linkUrl: "/shop/fruits",
        imgUrl: "https://i.ibb.co/FhGC6gf/avocado.jpg",
        price: 20,
      },
      {
        id: 2,
        name: "Bananas",
        sellerId: 1,
        linkUrl: "/shop/fruits",
        imgUrl: "https://i.ibb.co/qs3V67g/bananas.jpg",
        price: 20,
      },
      {
        id: 3,
        name: "Mangoes",
        sellerId: 1,
        linkUrl: "/shop/fruits",
        imgUrl: "https://i.ibb.co/6rZcV9b/mangoes.jpg",
        price: 20,
      },
      {
        id: 4,
        name: "Tomatoes",
        sellerId: 1,
        linkUrl: "/shop/fruits",
        imgUrl: "https://i.ibb.co/VByCZtT/tomatoes.jpg",
        price: 20,
      },
    ],
  },
  {
    id: 3,
    category: "cereals",
    routeName: "cereals",
    img: "https://i.ibb.co/3kV9Cys/brown-nut-lot-1192053.jpg",
    items: [],
  },
];

export const sellers = [
  {
    id: 1,
    name: "Jane Doe",
    profileImg: "",
    profileLink: "",
  },
  {
    id: 2,
    name: "Alice",
    profileImg: "",
    profileLink: "",
  },
  {
    id: 1,
    name: "Janet",
    profileImg: "",
    profileLink: "",
  },
];
