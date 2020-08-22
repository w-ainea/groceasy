import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../Input/";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { password, email } = this.state;

    return (
      <div className="p-10 h-screen text-center max-w-screen">
        <h1 className="text-xl mb-6">Sign In</h1>
        <form
          onSubmit={this.handleSubmit}
          className=" overflow-hidden text-center"
        >
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />

          <Link
            to="/recover-password"
            className="text-sm font-light text-green-500 underline cursor-pointer"
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            className="rounded-full w-64 mt-10 bg-green-500 py-2 text-white uppercase"
          >
            Sign In
          </button>
        </form>
        <p className="font-light uppercase mt-4">Or</p>
        <button className="rounded-full mt-4 w-11/12 bg-blue-600 py-2 text-white uppercase">
          sign in with google
        </button>
      </div>
    );
  }
}

export default SignIn;
