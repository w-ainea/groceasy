import * as React from "react";
import { toast } from "material-react-toastify";
import { useHistory } from "react-router-dom";

import { CustomButton, CustomInput, CustomSelect } from "..";

const ProductForm = ({ product, categories, onChange, saving }) => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const history = useHistory();

  // React.useEffect(() => console.log(product));

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

  const submitProductData = async (e) => {
    try {
      e.preventDefault();
      const form = document.getElementById("product-form");

      // submit data
      let resp = await fetch(`http://localhost:8000/products/add`, {
        method: "POST",
        body: new FormData(form),
      });

      if (resp.status === 200) {
        toast.success("product saved!");
        history.goBack();
      }
    } catch (error) {
      alert(error);
    }
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
          value={product.imageurl}
          onChange={imgUpload}
          file={file}
          error={error}
          type="file"
        />
        <CustomInput
          label="Product Name"
          name="name"
          placeholder="Product Name"
          value={product.product_name}
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
          value={product.category}
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
