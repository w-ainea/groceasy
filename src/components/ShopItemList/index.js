import React from "react";
import { ShopItem } from "..";

const ShopItemList = () => (
  <div className=" mx-auto mb-10 sm:mb-0 w-full">
    Category Title
    <div className="grid md:grid-cols-3 gap-16">
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
