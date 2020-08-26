import React from "react";
import { ShopItem } from "../../components";

const ShopItemList = () => (
  <div className="p-10 mx-auto mb-10 sm:mb-0">
    Category Title
    <div className="grid md:grid-cols-3 lg:grid-cols-4 pt-4 pb-2 gap-6">
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </div>
  </div>
);
export default ShopItemList;
