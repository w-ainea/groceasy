import React, { Component } from "react";
import TextInput from "../TextInput/TextInput";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    return (
      <div>
        <div className="w-full bg-grey-lightest pt-16">
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white">
              <div className="py-4 px-8 text-black text-xl  border-grey-lighter">
                Sign in to your account
              </div>
              <form onSubmit={this.handleSubmit} className="py-4 px-4">
                <TextInput
                  label="Enter your email Address"
                  type="email"
                  placeholder="Your Email address"
                  onChange={this.handleChange}
                />
                <TextInput
                  label="Enter your password"
                  type="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />

                <p className="text-grey text-xs mt-1">At least 6 characters</p>
                <div className="md:content-center md:justify-between mt-8">
                  <button
                    className="bg-transparent border border-teal-400 py-2 px-8 hover:bg-teal-500 rounded-full hover:text-white mb-4"
                    type="submit"
                  >
                    Sign In
                  </button>

                  <button
                    className="bg-transparent border border-teal-400 py-2 px-8 hover:bg-teal-500 rounded-full hover:text-white mb-4"
                    type="submit"
                  >
                    Sign In With Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
