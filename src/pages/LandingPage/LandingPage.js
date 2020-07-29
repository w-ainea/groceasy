import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "../../components/Button/Button";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRole: "",
    };
  }

  handleClick() {
    this.setState({ userRole: "client" });
    console.log(this.state);
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        {/* <Button onClick={() => history.push("/home")}>Shop</Button> */}
        <button onClick={() => history.push("/home")}>Shop</button>
        <button onClick={() => history.push("/dashboard")}>Dashboard</button>
        <Button>Sell Goods</Button>

        <button></button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
