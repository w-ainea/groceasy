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
      <h1 className="section-header font-headings font-semibold text-gray-700 mt-12 text-2xl ">
        Top Products by sales
      </h1>
      <div className="min-w-full">
        <table className="table-auto text-gray-800">
          <thead>
            <tr className="font-headings font-semibold border-b-2 border-green-300">
              <td className="w-1/2 py-4">Product Name</td>
              <td className="w-1/4">Revenue(KES) </td>
              <td className="w-1/4 text-center">Units sold</td>
            </tr>
          </thead>
          {salesList.map((sales) => (
            <tbody className="border-b-2 border-gray-200 text-center">
              <tr
                key={sales.id}
                className="border-b-2 border-gray-200 text-center"
              >
                <td className="font-hairline py-4">{sales.name}</td>
                <td className="font-hairline">{sales.revenue}</td>
                <td className="font-hairline">{sales.sold}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default SalesList;
