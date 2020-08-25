import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../Input";

class SignUp extends Component {
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
    const {
      firstName,
      lastName,
      password,
      email,
      confirmPassword,
    } = this.state;

    return (
      <div className="p-10 h-screen mx-auto text-center">
        <h1 className="text-xl mb-6">Sign Up</h1>
        <form
          onSubmit={this.handleSubmit}
          className="max-w-md text-center sm:max-w-lg"
        >
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange}
          />
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
          <Input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <Link
            to="/recover-password"
            className="block text-sm font-light text-green-500 underline cursor-pointer"
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            className="rounded-full mt-10 w-64 bg-green-500 py-2 text-white uppercase"
          >
            Sign Up
          </button>
        </form>
        <p className="font-light uppercase mt-4">Or</p>
        <button className="rounded-full mt-4 sm:w-64 bg-blue-600 py-2 text-white uppercase">
          sign up with google
        </button>
      </div>
    );
  }
}

export default SignUp;
