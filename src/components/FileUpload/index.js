import * as React from "react";

const FileUpload = ({ imgUpload, file, error }) => {
  return (
    <div className="w-full h-full items-center justify-center bg-grey-lighter grid text-gray-700 py-2">
      <h2 className="text-gray-700 py-6">Product Image</h2>
      <label className="w-64 flex flex-col items-center px-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-mandarin-color py-6">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input type="file" className="hidden" onChange={imgUpload} />
      </label>

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
