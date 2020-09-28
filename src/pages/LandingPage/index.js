import React from "react";
import { LoginButton } from "../../components";

const LandingPage = () => {
  return (
    <div className="justify-center align center">
      <h1>Landing page</h1>
      <button>Do shopping</button>
      <button>Sell</button>
      <LoginButton>Login/SignUp</LoginButton>
    </div>
  );
};

export default LandingPage;
