import React from "react";

import "./index.css";

class LandingPage extends React.Component {
  state = {
    role: "",
  };
  render() {
    return (
      <section className="landing items-center min-h-screen">
        <div className="flex justify-center py-64">
          <h1
            className="cta uppercase mx-8 px-4 py-2 rounded-md"
            onClick={() => this.setState({ role: "buyer" })}
          >
            buy
          </h1>
          <h1
            className="cta uppercase mx-8 px-4 py-2 rounded-md"
            onClick={() => this.setState({ role: "seller" })}
          >
            sell
          </h1>
          <h1 className="cta uppercase mx-8 px-4 py-2 rounded-md">login</h1>
        </div>

        {console.log(this.state)}
      </section>
    );
  }
}

export default LandingPage;
