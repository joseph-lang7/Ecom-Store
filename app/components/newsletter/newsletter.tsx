import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const Newsletter = () => {
  return (
    <div className="flex w-full justify-center bg-[#e0dfdf] mb-20">
      <div className="w-full max-w-[1400px] h-auto px-3 py-10 flex flex-col md:flex-row items-start gap-7 md:items-center justify-center">
        <div className="md:w-[350px] xl:w-[500px] w-full">
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
          <div className="flex gap-3 cursor-pointer">
            <div className="hover:text-red-700 transition-colors duration-500">
              <FaFacebookF />
            </div>
            <div className="hover:text-red-700 transition-colors duration-500">
              <FaXTwitter />
            </div>
            <div className="hover:text-red-700 transition-colors duration-500">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
