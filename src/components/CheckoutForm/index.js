import * as React from "react";
import { CustomButton } from "..";
import { CloseIcon } from "../Icons";

import "./index.css";

class CheckoutForm extends React.Component {
  state = {
    phone: "",
  };

  handleCheckout = () => {
    this.props.checkout(this.props.total, this.state.phone);
    this.props.handleClose();
  };

  render() {
    const { show, total, handleClose } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div className="max-w-xs modal-main rounded-md shadow-xs">
          <div className="text-green-500 absolute right-0 pr-4 pt-2 cursor-pointer">
            <CloseIcon onClick={handleClose} />
          </div>
          <form
            className="bg-white px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="tel"
                placeholder="0712345678"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
            <p className="text-gray-700">Your total is: {total}</p>
            <div className="flex items-center justify-between">
              <CustomButton onClick={this.handleCheckout}>Pay Now</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
