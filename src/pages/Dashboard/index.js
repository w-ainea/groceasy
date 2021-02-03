import React from "react";
import { connect } from "react-redux";
import { Analytics } from "../../components";

const Dashboard = ({ products }) => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl text-mandarin-color">Dashboard</h1>
      <div className="dashboard-header my-4">
        <ul className="dashboard-tabs flex justify-between w-40 bg-green-400 px-4 py-2 rounded-full text-white">
          <li className="tab">Today</li>
          <li className="tab">Week</li>
          <li className="tab">Year</li>
        </ul>

        <div className="date"></div>
        <div className="dashboard-content">
          <Analytics />
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
