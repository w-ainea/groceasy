import React from "react";

import { connect } from "react-redux";

const Profile = ({ user }) => {
  console.log(user);

  return (
    user.isAuthenticated && (
      <div className=" profile-container grid sm:flex justify-center items-center bg-white w-6/12 mx-auto py-4 ">
        <div className="profile-img-wrapper w-12 h-12">
          {/* <img src={`${user.picture}`} alt="profile" className="rounded-full" /> */}
        </div>

        <div className="px-8">
          <h1 className="font-semibold text-gray-800">{user.name}</h1>
          {/* <span className="font-light text-gray-600">{user.email}</span> */}
        </div>
        <div>{/* <AuthenticationButton />{" "} */}</div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Profile);
