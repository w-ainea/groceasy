import React from "react";
import Fruits from "../../assets/img/fruits.jpg";

const ShopItem = () => {
  return (
    <div className="shadow-lg rounded-md bg-white object-cover overflow-hidden max-w-md">
      <img src={`${Fruits}`} alt="fruits" className="w-100 bg-cover" />
      <div className="flex justify-between mt-4 px-2">
        <h1 className="text-base font-medium">Orange</h1>
        <h1 className="text-base font-medium">Ksh. 20</h1>
      </div>
      <div className="px-2 py-2">
        <h1>Seller Name</h1>
      </div>
      <button className="w-40 uppercase text-green-500 rounded-full border border-green-600 px-4 py-1 mb-4">
        buy
      </button>
    </div>
  );
};

export default ShopItem;
