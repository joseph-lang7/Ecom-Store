import React from "react";

export const Input = () => {
  return (
    <input
      type="text"
      placeholder="Your Email"
      className="pl-3 w-full md:max-w-[600px] focus:outline-none focus:border-[1px] focus:border-red-700 transition-colors duration-500 ease-in-out placeholder:text-xs"
    />
  );
};
