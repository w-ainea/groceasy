import * as React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import { ProductForm } from "../../components";

import * as productActions from "../../redux/actions/productActions";
import * as caregorytActions from "../../redux/actions/categoryActions";

const ManageProduct = ({
  products,
  categories,
  fetchProducts,
  fetchCategories,
  saveProduct,
  ...props
}) => {
  // local component state
  const [product, setProduct] = React.useState({ ...props.product });
  const [saving, setSaving] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (products.length === 0) {
      fetchProducts().catch((err) => alert(err));
    }
    if (categories.length === 0) {
      fetchCategories().catch((err) => alert(err));
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((currentProduct) => ({
      ...currentProduct,
      [name]: value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    toast.success("product saved");
    saveProduct(product).then(() => props.history.push("/products"));
  }

  function imgUpload(e) {
    let file = e.target.files[0];

    const types = ["image/png", "image/jpeg", "image/jpg"];

    if (file && types.includes(file.type)) {
      setFile(file);
      setError("");
    } else {
      setFile(null);
      setError("Please select the correct file type (.png or .jpeg)");
    }
  }

  return (
    <div className="flex justify-center mt-8">
      <ProductForm
        product={product}
        categories={categories}
        onChange={handleChange}
        saveProduct={saveProduct}
        onSave={handleSave}
        saving={saving}
        imgUpload={imgUpload}
        file={file}
        error={error}
      />
    </div>
  );
};

function mapStateToProps(state) {
  const product = { name: "", price: "", category: "", quantity: "" };

  return {
    product,
    products: state.products,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchCategories: caregorytActions.fetchCategories,
  saveProduct: productActions.saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
