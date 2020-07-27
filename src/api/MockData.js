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
      },
      {
        id: 2,
        name: "Carrots",
        sellerId: 1,
        linkUrl: "/shop/vegetables",
        imgUrl: "https://i.ibb.co/mG2cCZr/carrots.jpg",
      },
      {
        id: 3,
        name: "Kale",
        sellerId: 1,
        linkUrl: "/shop/vegetables",
        imgUrl: "",
      },
    ],
  },
  {
    id: 2,
    category: "fruits",
    routeName: "fruits",
    img: "https://i.ibb.co/ggTvLTZ/sliced-fruits-on-tray-1132047.jpg",
    items: [],
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
