import * as React from "react";
import { connect } from "react-redux";

import * as authActions from "../../redux/actions/authActions";
import { CustomButton, CustomInput } from "..";

const Register = ({ register }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // confirm passwords
    if (password !== confirmPassword) {
      setError("passwords do not match");
    }
  }

  return (
    <form
      className="register-form"
      onSubmit={(e) => {
        e.preventDefault();
        register(username, email, password);
      }}
    >
      <CustomInput
        label="Username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
      />
      <CustomInput
        label="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
      />
      <CustomInput
        label="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />

      <CustomInput
        label="Confirm password"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        type="password"
      />
      {error && <div>passwords do not match</div>}
      <CustomButton>Register</CustomButton>
    </form>
  );
};

const mapDispatchToProps = {
  register: authActions.registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
