import * as React from "react";
import { connect } from "react-redux";
import { Analytics, Revenue, SalesList } from "../../components";

const userRevenue = [
  {
    id: 1,
    label: "Total Revenue",
    value: 20000,
  },
  {
    id: 2,
    label: "Revenue from vegetables",
    value: 8000,
  },
  {
    id: 3,
    label: "Revenue from fruits",
    value: 5000,
  },

  {
    id: 4,
    label: "Revenue from spices",
    value: 5000,
  },
];

const Dashboard = ({ products }) => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl text-mandarin-color">Dashboard</h1>
      <div className="dashboard-header my-4">
        <div className="dashboard-content">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {userRevenue.map((revenue) => (
              <Revenue key={revenue.id} {...revenue} />
            ))}
          </div>
          <SalesList />
          {/* <Analytics /> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  orders: state.orders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
