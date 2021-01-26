import * as React from "react";

const FileUpload = ({ imgUpload, file, error }) => {
  return (
    <div className="w-full h-full items-center justify-center  grid text-gray-700 ">
      <label></label>
      <input type="file" onChange={imgUpload} />

      {file ? (
        <div className="font-light text-black-coffee">{file.name}</div>
      ) : (
        <div className="text-gray-700 py-4">No file selected</div>
      )}
      {error && <div className="font-light text-orange-700">{error}</div>}
    </div>
  );
};

export default FileUpload;
