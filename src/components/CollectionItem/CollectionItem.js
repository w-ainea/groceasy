import React from "react";

const CollectionItem = ({ id, name, linkUrl, imgUrl, price }) => (
  <div key={id} className=" ">
    <img src={imgUrl} alt="" className=" rounded-lg p-2" />
    <div className="flex justify-between px-2">
      <h3>{name}</h3>
      <span>{price}</span>
    </div>
  </div>
);

export default CollectionItem;
