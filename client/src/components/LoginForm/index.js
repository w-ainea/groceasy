import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as authActions from "../../redux/actions/authActions";
import { CustomButton, CustomInput } from "..";

const LoginForm = ({ login, history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then(history.push("/admin"));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <CustomInput
        label="Enter your email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <CustomInput
        label="Enter your password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <CustomButton>Log In</CustomButton>
    </form>
  );
};

const mapDispatchToProps = {
  login: authActions.loginUser,
};

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
