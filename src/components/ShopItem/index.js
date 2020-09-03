import React from "react";
// import Fruits from "../../assets/img/fruits.jpg";

const ShopItem = ({ product }) => {
  return (
    <div className="shadow-lg rounded-md bg-white object-cover overflow-hidden sm:w-36 flex flex-col">
      <img src={product.imgUrl} alt="fruits" className="w-100 bg-cover" />
      <div className="flex justify-between mt-4 px-2">
        <h1 className="text-base font-medium">{product.name}</h1>
        <h1 className="text-base font-medium">{product.price}</h1>
      </div>
      <div className="px-2 py-2">
        <h1>Seller Name</h1>
      </div>
      <button className="btn-primary hover:border-green-500  hover:bg-white  hover:text-green-500 ">
        buy
      </button>
    </div>
  );
};

export default ShopItem;
