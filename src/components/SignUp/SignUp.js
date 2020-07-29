import React, { Component } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

export default class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <div className="w-full bg-grey-lightest pt-16">
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white">
              <div className="py-4 px-8 text-black text-xl  border-grey-lighter">
                Register for a free account
              </div>
              <form onSubmit={this.handleSubmit} className="py-4 px-8">
                <TextInput
                  label="First name"
                  name="firstName"
                  placeholder="Your first name"
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Last name"
                  name="lastName"
                  placeholder="Your last name"
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Email "
                  name="email"
                  placeholder="email "
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Password "
                  name="password"
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
                <div className="content-center justify-between md:mt-8">
                  {/* <button
                    className="bg-transparent border border-teal-400 py-2 px-8 hover:bg-teal-500 rounded-full hover:text-white mb-4"
                    type="submit"
                  >
                    Sign In
                  </button> */}

                  <Button>Sign In</Button>
                  {/* 
                  <button
                    className="bg-transparent border border-teal-400 py-2 px-8 hover:bg-teal-500 rounded-full hover:text-white mb-4"
                    type="submit"
                  >
                    Sign In With Google
                  </button> */}

                  <Button>Sign In with Google</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
