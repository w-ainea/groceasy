import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as authActions from "../../redux/actions/authActions";
import { CustomButton, CustomInput } from "..";

const LoginForm = ({ login, history, loadUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const saveTokenInSession = (token) => {
    window.sessionStorage.setItem("token", token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = await login(email, password);
    let response = loginData.payload.response;
    console.log(response);
    saveTokenInSession(response.token);
    history.push("/admin");
  };

  React.useEffect(() => {
    const token = window.sessionStorage.getItem("token");

    if (token) {
      fetch(process.env.REACT_APP_API_URL + "/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data && data.id) {
            loadUser(data.id).then(() => history.push("/admin"));
          }
        })
        .catch(console.log);
    }
  });

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
  loadUser: authActions.fetchUser,
};

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
