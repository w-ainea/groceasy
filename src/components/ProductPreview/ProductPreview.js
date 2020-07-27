import React, { Component } from "react";

import { products } from "../../api/MockData";

class ProductPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products,
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="bg-orange-200">
        <div className="w-4/5 mx-auto">
          <h2 className="pt-20 text-center">
            Start your journey with us today
          </h2>
          <div className="flex flex-wrap mx-1 overflow-hidden font-light mt-12">
            {products.map(({ id, imgUrl, name }) => (
              <div
                key={id}
                className="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"
                // style={{ backgroundImage: `url(${imgUrl})` }}
                onClick={() => console.log(imgUrl)}
              >
                <img src="{imgUrl}" alt="" className="w-100" />
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPreview;
