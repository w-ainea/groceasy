import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    isAuthenticated && (
      <div className=" profile-container flex justify-center items-center bg-white w-6/12 mx-auto py-4">
        <div className="profile-img-wrapper w-12 h-12">
          <img src={user.picture} alt="profile" className="rounded-full" />
        </div>

        <div className="px-8">
          <h1 className="font-semibold text-gray-800">{user.name}</h1>
          <span className="font-light text-gray-600">{user.email}</span>
        </div>
      </div>
    )
  );
};

export default Profile;
