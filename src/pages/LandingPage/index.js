import React from "react";

import "./index.css";

const LandingPage = () => {
  return (
    <section className="landing items-center min-h-screen">
      <div className="flex justify-center py-64">
        <h1 className="cta uppercase mx-8 px-4 py-2 rounded-md">buy</h1>
        <h1 className="cta uppercase mx-8 px-4 py-2 rounded-md">sell</h1>
        <h1 className="cta uppercase mx-8 px-4 py-2 rounded-md">login</h1>
      </div>
    </section>
  );
};

export default LandingPage;
