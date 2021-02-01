import React from "react";

import { UserItem } from "..";
import { CurrencyIcon, StockIcon, AccountIcon } from "../Icons";

const items = [
  {
    id: 1,
    label: "Total Revenue",
    value: 20,
  },
  {
    id: 2,
    icon: <CurrencyIcon />,
    label: "Revenue from Vegetables",
    value: 2000,
  },
  {
    id: 3,
    icon: <AccountIcon />,
    label: "Revenue from fruits",
    value: 30,
  },
  {
    id: 4,
    icon: <AccountIcon />,
    label: "Revenue from other items",
    value: 30,
  },
];

const UserInfo = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-4">
      {items.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default UserInfo;
