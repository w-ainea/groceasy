import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as authActions from "../../redux/actions/authActions";
import { CustomButton, CustomInput } from "..";
import { toast } from "material-react-toastify";

const Register = ({ register, history, loadUser }) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [error, setError] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    register(username, email, password)
      .then(() => toast.success("Successfully registered"))
      .then(() => history.push("/admin"));
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
        label="Phone Number"
        name="phone"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        type="number"
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
  loadUser: authActions.fetchUser,
};

export default withRouter(connect(null, mapDispatchToProps)(Register));
