import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ category, items }) => (
  <div className="w-4/5 mx-auto pt-8">
    <h3 className="capitalize cursor-pointer pb-4 px-2">{category}</h3>
    <div className="flex">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
