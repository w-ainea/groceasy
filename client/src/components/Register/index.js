import * as React from "react";
import { CustomButton, CustomInput } from "..";

const Register = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    console.log("name: ", name, "value: ", value);
    if (name === "firstName" && value !== "") {
      setFirstName(value);
    } else if (name === "lastName" && value !== "") {
      setLastName(value);
    } else if (name === "email" && value !== "") {
      setEmail(value);
    } else if (name === "password" && value !== "") {
      setPassword(value);
    } else if (name === "confirmPassword" && value !== "") {
      // if (password === confirmPassword) {
      setConfirmPassword(value);
      /* } else {
        alert("The passwords you entered don't match");
      } */
    } else {
      setError(error);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <CustomInput
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={firstName}
        type="text"
      />
      <CustomInput
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={lastName}
        type="text"
      />
      <CustomInput
        label="Email"
        name="email"
        onChange={handleChange}
        value={email}
        type="email"
      />
      <CustomInput
        label="Password"
        name="password"
        onChange={handleChange}
        value={password}
        type="password"
      />
      <CustomInput
        label="Confirm password"
        name="confirmPassword"
        onChange={handleChange}
        value={confirmPassword}
        type="password"
      />
      <CustomButton>Register</CustomButton>
    </form>
  );
};

export default Register;
