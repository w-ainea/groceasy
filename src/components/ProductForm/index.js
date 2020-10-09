import React from "react";
import { Link } from "react-router-dom";

import { CustomInput, CustomSelect } from "..";

const ProductForm = ({ product, categories, onChange }) => {
  return (
    <div className="w-full max-w-xs">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <CustomInput
            name="Name"
            placeholder="product name"
            value={product.name}
            onChange={onChange}
          />

          <CustomInput
            name="Price"
            placeholder="KSH"
            value={product.price}
            onChange={onChange}
          />

          <CustomSelect
            name="category"
            label="Category"
            onChange={onChange}
            value={product.categoryId}
            defaultOption="Select Category"
            options={categories.map((category) => ({
              value: category.title,
              name: category.title,
            }))}
          />

          <div class="flex items-center justify-between">
            <Link
              to="/products"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
