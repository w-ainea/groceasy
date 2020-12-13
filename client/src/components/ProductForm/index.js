import * as React from "react";

import { CustomButton, CustomInput, CustomSelect, FileUpload } from "..";

const ProductForm = ({ product, categories, onChange, onSave, saving }) => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  function imgUpload(e) {
    let file = e.target.files[0];

    const types = ["image/png", "image/jpeg", "image/jpg"];

    if (file && types.includes(file.type)) {
      setFile(file);
      console.log(file);
      setError("");
      fetch(process.env.REACT_APP_API_URL + "/products/image-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: file }),
      })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    } else {
      setFile(null);
      setError("Please select the correct file type (.png or .jpeg)");
    }
  }

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSave}
      >
        <FileUpload imgUpload={imgUpload} file={file} error={error} />
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
          value={product.quantiry}
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
