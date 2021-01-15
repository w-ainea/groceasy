import * as React from "react";
import { connect } from "react-redux";

import * as authActions from "../../redux/actions/authActions";
import { CustomButton, CustomInput } from "..";

const LoginForm = ({ login }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        login(email, password);
      }}
    >
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

export default connect(null, mapDispatchToProps)(LoginForm);
