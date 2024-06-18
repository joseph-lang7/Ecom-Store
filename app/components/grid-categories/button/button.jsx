import React from "react";

export const Button = ({ content }) => {
  return (
    <button className="bg-white px-6 py-2 uppercase hover:bg-red-700 hover:text-white transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      {content}
    </button>
  );
};
