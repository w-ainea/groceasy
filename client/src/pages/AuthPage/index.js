import * as React from "react";
import LoginForm from "../../components/LoginForm";

const AuthPage = () => (
  <div className="auth">
    <h2>Authentication Page</h2>
    <div className="flex">
      <LoginForm />
    </div>
  </div>
);

export default AuthPage;
