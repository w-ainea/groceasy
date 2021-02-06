import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

import * as authActions from "../../redux/actions/authActions";
import { CustomButton, CustomInput } from "..";
import { toast } from "react-toastify";

const LoginForm = ({ login, history, loadUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const saveTokenInSession = (token) => {
    return window.sessionStorage.setItem("token", token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      saveTokenInSession(response.payload.token);
      toast.success("Login Successful");
      const user = await loadUser(response.payload.id, response.payload.token);
      return user;
    } catch (error) {
      alert(error);
    }
  };

  React.useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    console.log(token);

    if (token) {
      axios({
        method: "POST",
        url: process.env.REACT_APP_API_URL + "/auth/signin",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then(console.log())
        .then((response) => {
          console.log("useEffect response" + response);
          const { id } = response.data.response;

          if (id) {
            loadUser(id, token)
              .then((response) => {
                return response;
              })
              .then(() => history.push("/admin"));
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
