import React from "react";
import { connect } from "react-redux";

// import { logout } from "../../redux/actions/authActions";

const Profile = ({ user }) => {
  console.log("user", user);
  return (
    user.isAuthenticated && (
      <div className=" profile-container grid sm:flex justify-center items-center bg-white w-6/12 mx-auto py-4">
        <div className="px-8">
          <h1 className="font-semibold text-gray-800">
            {/* Welcome back, {user.credentials.username} */}
          </h1>
        </div>
        <div>
          <button
            onClick={() => {
              sessionStorage.clear();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

// const mapDispatchToProps = {
//   logout,
// };

export default connect(mapStateToProps, null)(Profile);
