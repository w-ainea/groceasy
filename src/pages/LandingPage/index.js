import React from "react";
import { CustomButton } from "../../components";

const LandingPage = (props) => {
  return (
    <div>
      <h1>LandingPage</h1>
      <CustomButton onClick={props.auth.login}>Login</CustomButton>
    </div>
  );
};

export default LandingPage;
