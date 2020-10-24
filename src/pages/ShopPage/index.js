import React from "react";
import { ShopItemList } from "../../components";

const ShopPage = () => (
  <div className="my-8">
    <h1 className="text-xl text-center mb-8 font-headings text-gray-800">
      Featured Items
    </h1>
    <ShopItemList />
  </div>
);

export default ShopPage;
