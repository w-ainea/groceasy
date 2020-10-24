import React from "react";

import { CustomButton, CustomInput, CustomSelect } from "..";

const ProductForm = ({ product, categories, onChange, onSave }) => {
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSave}
      >
        <CustomInput
          name="product_name"
          placeholder="Product Name"
          value={product.name}
          onChange={onChange}
          type="text"
        />

        <CustomInput
          name="price"
          placeholder="KSH"
          value={product.price}
          onChange={onChange}
          type="number"
        />

        <CustomSelect
          name="category"
          label="Category"
          onChange={onChange}
          value={product.categoryId}
          defaultOption="Select Category"
          options={categories.map((category) => ({
            value: category.id,
            text: category.name,
          }))}
        />

        <div className="flex items-center justify-between">
          <CustomButton>Save</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
