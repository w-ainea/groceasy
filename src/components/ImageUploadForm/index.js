import React from "react";
import { Link } from "react-router-dom";

import { FileUpload } from "..";

const ImageUploadForm = ({ imgUpload, file, error }) => {
  return (
    <div className="items-center">
      <FileUpload imgUpload={imgUpload} file={file} error={error} />

      <Link to="/product-upload">Next</Link>
    </div>
  );
};

export default ImageUploadForm;
