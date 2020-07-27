import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import { products } from "../../api/MockData";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products,
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className="mx-auto">
        {products.map(({ id, ...otherProductProps }) => (
          <CollectionPreview key={id} {...otherProductProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
