import React from "react";
import { Link } from "react-router-dom";

function DataNotFound() {
  return (
    <div className="flex items-center">
      <Link to="/">
        <div className="bg-green-500 p-2 text-white hover:red-300">
          Back to Home
        </div>
      </Link>

      <div className="flex items-center justify-center bg-gray-300 mt-5">
        <img src="/Public/error-404.jpg" />
      </div>
    </div>
  );
}
export default DataNotFound;
