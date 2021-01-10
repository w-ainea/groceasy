import * as React from "react";
import { CustomButton, CustomInput } from "..";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassord] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value !== "") {
      setEmail(value);
    } else {
      setPassord(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <CustomInput
        label="Enter your email"
        name="email"
        value={email}
        onChange={handleChange}
        type="email"
      />
      <CustomInput
        label="Enter your password"
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
      />
      <CustomButton>Log In</CustomButton>
    </form>
  );
};
export default LoginForm;
