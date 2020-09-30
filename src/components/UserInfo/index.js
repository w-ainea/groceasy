import React from "react";

import { UserItem } from "..";
import { ShopIcon } from "../Icons";

const items = [
  {
    id: 1,
    icon: <ShopIcon />,
    label: "Products",
    value: 20,
  },
  {
    id: 2,
    icon: <ShopIcon />,
    label: "Sales",
    value: 2000,
  },
  {
    id: 3,
    icon: <ShopIcon />,
    label: "Customers",
    value: 30,
  },
];

const UserInfo = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 py-4">
      {items.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default UserInfo;
