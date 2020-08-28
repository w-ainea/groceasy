import React from "react";
import { ShopItem } from "..";

const ShopItemList = () => (
  <div className=" mx-auto mb-10 sm:mb-0 w-full">
    Category Title
    <div className="grid sm:grid-cols-2 gap-6">
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </div>
  </div>
);
export default ShopItemList;
