import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginIcon } from "../Icons";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <div
        className="grid justify-center cursor-pointer hover:text-mandarin-color sm:ml-10"
        onClick={loginWithRedirect}
      >
        <span className="sm:hidden">
          <LoginIcon />
        </span>
        <button>Log in</button>
      </div>
    )
  );
}

export default LoginButton;
