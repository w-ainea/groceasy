import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="bg-orange-100 pb-20">
        <div className="w-4/5 mx-auto">
          <h2 className="pt-20 text-center font-semibold text-4xl">
            Featured categories
          </h2>
          <div className="flex flex-wrap mx-1 overflow-hidden font-light mt-12">
            {products.map(({ id, img, category, routeName }) => (
              <div
                key={id}
                className="my-1 px-4 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"
                // style={{ backgroundImage: `url(${imgUrl})` }}
                onClick={() => console.log(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-100 max-h-full rounded shadow-lg"
                />
                <div className="flex justify-between p-6 items-center">
                  <h3 className="font-medium capitalize">{category}</h3>
                  <Link
                    to={`/${routeName}`}
                    className="bg-teal-500 py-2 px-8 rounded-full text-white mr-2 hover:text-teal-500 hover:bg-transparent border hover:border-teal-500"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPreview;
