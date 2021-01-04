import * as React from "react";

import { CustomButton, CustomInput, CustomSelect, FileUpload } from "..";

const ProductForm = ({ product, categories, onChange, onSave, saving }) => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const imgUpload = (e) => {
    let file = e.target.files[0];

    const types = ["image/png", "image/jpeg"];

    if (file && types.includes(file.type)) {
      setFile(file);
      setError("");
    } else {
      setFile(null);
      setError("Please select the correct file type (.png or .jpeg)");
    }
  };

  const submitProductData = (e) => {
    e.preventDefault();
    const form = document.getElementById("product-form");

    // submit data
    fetch(`http://localhost:8000/products/add`, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => console.log(response))
      .catch((err) => alert(err));
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submitProductData}
        id="product-form"
      >
        <CustomInput
          label="Product Image"
          name="image"
          value={product.image}
          onChange={imgUpload}
          file={file}
          error={error}
          type="file"
        />
        <CustomInput
          label="Product Name"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={onChange}
          type="text"
        />

        <CustomInput
          label="Product Price"
          name="price"
          placeholder="KSH"
          value={product.price}
          onChange={onChange}
          type="number"
        />

        <CustomInput
          label="Quantity"
          name="quantity"
          placeholder="1, 2, 3 ..."
          value={product.quantity}
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
            key: category.id,
            value: category.name,
            text: category.name,
          }))}
        />

        <div className="flex items-center justify-between">
          <CustomButton disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
