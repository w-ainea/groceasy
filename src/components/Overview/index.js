import React from "react";

import { Card } from "..";

const Overview = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Overview;
