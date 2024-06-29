import React from "react";

export const NewsletterSignUp = () => {
  return (
    <>
      <div className="md:w-[400px] xl:w-[500px] w-full">
        <h3 className="text-xl w-full">Sign up for Send Newsletter</h3>
      </div>
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center w-full">
        <div className="flex w-full justify-center">
          <input
            type="text"
            placeholder="Your Email"
            className="pl-3 w-full md:max-w-[600px] focus:outline-none focus:border-[1px] focus:border-red-700 transition-colors duration-500 ease-in-out placeholder:text-xs"
          />
          <button className="bg-red-700 px-5 py-3 text-white text-xs">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
};
