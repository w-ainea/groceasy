import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutIcon } from "../Icons";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div
      className="grid justify-center cursor-pointer hover:text-mandarin-color"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <span className="sm:hidden">
        <LogoutIcon />
      </span>
      <button>Log Out</button>
    </div>
  );
};

export default LogoutButton;
