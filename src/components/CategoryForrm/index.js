import React from "react";
import axios from "axios";

import { CustomInput } from "..";

const CategoryForm = () => {
  const [name, setName] = React.useState("");
  const [file, setFile] = React.useState("");
  const [error, setError] = React.useState("");
  const handleImageUpload = (e) => {
    let file = e.target.files[0];

    const types = ["image/png", "image/jpeg"];

    if (file && types.includes(file.type)) {
      setFile(file);
      setError("");
    } else {
      setFile(null);
      setError("Please select the correct file type (.png or .jpeg)");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = document.querySelector(".category-form");
    const formData = new FormData(form);

    let resp = await axios({
      method: "post",
      url: process.env.REACT_APP_API_URL + "/categories/add",
      data: formData,
    });

    console.log(resp.data);
    return resp;
  };
  return (
    <form className="category-form container" onSubmit={handleSubmit}>
      <CustomInput
        name="image"
        type="file"
        label="category image"
        file={file}
        onChange={handleImageUpload}
        error={error}
      />
      <CustomInput
        name="name"
        value={name}
        type="text"
        label="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default CategoryForm;
