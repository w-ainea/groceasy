import React from "react";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div className="container">
      <h1 className="font-headings font-medium text-xl text-gray-700">
        Profile Page
      </h1>
      <div>
        <div className="user-img flex justify-center">
          <img
            src="../../assets/img/user.jpg"
            className="h-10 w-10 p-8 rounded-full bg-white"
            alt="profile"
          />
        </div>

        <div>
          <h1 className="font-display font-medium">
            <span className="capitalize text-gray-700">username:</span>{" "}
            {user.credentials.username}
          </h1>
          <h1 className="font-display font-medium">
            <span className="capitalize text-gray-700">email:</span>{" "}
            {user.credentials.email}
          </h1>
          <h1 className="font-display font-medium">
            <span className="capitalize text-gray-700">
              Number of products:{" "}
            </span>{" "}
            {user.credentials.products}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
