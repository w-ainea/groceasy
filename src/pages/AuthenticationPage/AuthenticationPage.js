import React from "react";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const AuthenticationPage = () => (
  <div className="md:grid md:grid-cols-2">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
