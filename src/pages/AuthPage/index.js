import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginForm, Register } from "../../components";

const AuthPage = ({ user }) => {
  const { isAuthenticated } = user;
  return (
    <div className="auth py-8">
      {isAuthenticated ? (
        <Redirect to="/admin" />
      ) : (
        <div>
          <h2 className="font-headings font-bold text-2xl text-center text-gray-700 pb-4">
            Welcome to Groceasy
          </h2>

          <div className="sm:flex justify-center">
            <div className="login px-8 md:px-10 py-8">
              <h1 className="text-lg font-medium text-mandarin-color pb-4 text-center">
                I already have an account
              </h1>
              <p className="text-gray-700 pb-4 text-center">
                Login using your email and password to continue
              </p>
              <LoginForm />
            </div>

            <div className="register px-8 mb-10 sm:mb-0 md:px-10">
              <h1 className="text-lg font-medium text-mandarin-color pb-4 text-center">
                I don't have an account
              </h1>
              <p className="text-gray-700 pb-4 text-center">
                Register using your email and password to continue
              </p>
              <Register />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(AuthPage);
