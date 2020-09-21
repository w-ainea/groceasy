import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant="danger"
      className="border border-green-400 px-4 py-2 rounded-full hover:text-green-400"
    >
      Log Out
    </div>
  );
};

export default LogoutButton;
