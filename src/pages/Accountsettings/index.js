import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "../../components/LogoutButton";

const AccountSettingsPage = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="container mx-auto px-8 relative">
      <h1>Account Settings</h1>
      {isAuthenticated && (
        <div className="account grid ">
          <div className="flex justify-center  mb-6">
            <img
              src={user.picture}
              alt={user.name}
              className=" w-20 h-20 rounded-full self-center"
            />
          </div>
          <h1 className="text-lg font-medium text-center">{user.name}</h1>
          <div className="orders mt-8">
            <h1 className="text-lg font-semibold text-center">Your Orders</h1>
            <div className="order-summary">
              <div className="orders-header flex flex-auto justify-between mx-4">
                <span className="capitalize">Date</span>
                <span className="capitalize">order number</span>
                <span className="capitalize">products</span>
                <span className="capitalize">Total</span>
              </div>
              <hr />
              {}

              <div>
                <div>{}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAuthenticated && (
        <div className="logout-btn absolute top-auto right-0 mr-10 mt-10 cursor-pointer">
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default AccountSettingsPage;
