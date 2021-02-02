import * as React from "react";
import { CustomButton, CustomInput } from "..";

const CreateShopForm = () => {
  const { shopName, setShopName } = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="account-page">
      <div className="navigation">
        <div className="user-profile"></div>
        <ul className="nav">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
        </ul>
      </div>
      <div className="main-content"></div>
    </div>
  );
};

export default CreateShopForm;
