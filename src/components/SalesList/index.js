import React from "react";

const salesList = [
  {
    id: 1,
    name: "Brocolli",
    revenue: 5000,
    sold: 100,
  },
  {
    id: 2,
    name: "Kale",
    revenue: 4500,
    sold: 300,
  },
  {
    id: 3,
    name: "Cabbage",
    revenue: 4000,
    sold: 200,
  },
];

const SalesList = () => {
  return (
    <section className="my-8">
      <h1 className="section-header ">Top Products by sales</h1>
      <div className="min-w-full">
        <table className="table-auto text-gray-800">
          <thead>
            <tr className="font-headings font-semibold border-b-2">
              <td className="w-1/2">Product Name</td>
              <td className="w-1/2">Revenue(KES) </td>
              <td className="w-1/2">Units sold</td>
            </tr>
          </thead>
          {salesList.map((sales) => (
            <tbody>
              <tr className="border-b-2 p-8">
                <td>{sales.name}</td>
                <td>{sales.revenue}</td>
                <td>{sales.sold}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default SalesList;
