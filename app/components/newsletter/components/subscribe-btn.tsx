import React from "react";

export const SubscribeButton = () => {
  return (
    <button className="px-7 py-2.5 relative  group overflow-hidden font-medium bg-red-700 text-white inline-block">
      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
      <span className="relative group-hover:text-white flex w-full justify-center">
        SUBSCRIBE
      </span>
    </button>
  );
};
