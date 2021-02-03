import * as React from "react";
import { connect } from "react-redux";

import { fetchSellers } from "../../redux/actions/sellerActions";
import { Seller } from "..";

const SellersList = ({ sellers, fetchSellers }) => {
  React.useEffect(() => {
    if (sellers.length === 0) {
      fetchSellers();
    }
  }, []);

  return (
    <div className="container">
      <h1>Sellers List</h1>
      {sellers.map((seller) => (
        <Seller key={seller.id} {...seller} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sellers:
    state.sellers.length === 0
      ? []
      : state.sellers.map((seller) => {
          return {
            ...seller,
            sellerProducts: state.products.find(
              (product) => product.user_id === seller.id
            ),
          };
        }),
});

const mapDispatchToProps = {
  fetchSellers,
};

export default connect(mapStateToProps, mapDispatchToProps)(SellersList);
