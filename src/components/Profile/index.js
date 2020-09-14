import React from "react";

const Profile = () => {
  return (
    <div className=" profile-container">
      <div className="profile-img-wrapper w-24 h-24 rounded-full bg-gray-200  mx-auto">
        <img src="" alt="profile" />
      </div>

      <div className="profile-footer pt-8 text-center">
        <h1 className="font-semibold text-gray-800">Jane Doe</h1>
        <span className="font-light text-gray-600">jane.doe@mail.com</span>
      </div>
    </div>
  );
};

export default Profile;
