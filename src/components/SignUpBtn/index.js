import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      className="primary-btn"
      onClick={() => loginWithRedirect({ screen_hint: "signup" })}
    >
      Sign Up
    </div>
  );
};

export default SignUpButton;
