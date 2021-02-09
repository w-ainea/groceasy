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

  React.useEffect(() => {
    console.log("products:", products);

    if (products.length === 0) {
      fetchProducts().catch((err) => console.log(err));
    }
    if (categories.length === 0) {
      fetchCategories().catch((err) => console.log(err));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((currentProduct) => ({
      ...currentProduct,
      [name]: value,
    }));
    console.log(product);
  }

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    toast.success("product saved");
    saveProduct(product).then(() => props.history.push("/products"));
  }

  return (
    <div className="grid justify-center mt-8">
      <ProductForm
        product={product}
        categories={categories}
        onChange={handleChange}
        saveProduct={saveProduct}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
};

function mapStateToProps({ products, categories }, ownProps) {
  const newProduct = {
    image: null,
    name: "",
    price: "",
    category: "",
    quantity: "",
  };

  const id = ownProps.match.params.id;

  const product = id
    ? products.find((product) => product.id === id)
    : newProduct;

  return {
    product,
    products,
    categories,
  };
}

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
  fetchCategories: caregorytActions.fetchCategories,
  saveProduct: productActions.saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
