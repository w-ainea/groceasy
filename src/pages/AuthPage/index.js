import * as React from "react";
import { LoginForm, Register } from "../../components";

const AuthPage = () => (
  <div className="auth py-8">
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
);

export default AuthPage;
