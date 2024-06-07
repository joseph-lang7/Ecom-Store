import React from "react";
import { Button } from "../button/button";
import { FaFacebookF } from "react-icons/fa";
import { SocialIcon } from "../social-icon/social-icon";

export const Hero = () => {
  return (
    <div
      className="bg-cover bg-top w-full h-[1200px] relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/9558912/pexels-photo-9558912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="w-full h-full flex justify-center">
        <div className="2xl:w-[1500px] lg:w-[1300px] justify-between flex w-full h-full items-center text-center px-5">
          <div className="w-max flex h-max flex-col gap-3">
            <div className="flex gap-2 items-center justify-center w-full">
              <span className="hidden lg:block h-[3px] w-[50px] bg-slate-500"></span>
              <h5>Summer Fashion</h5>
              <span className="hidden lg:block h-[3px] w-[50px] bg-slate-500"></span>
            </div>
            <h3 className="text-5xl lg:text-8xl font-bold tracking-widest">
              SALE
            </h3>
            <h4 className="text-2xl lg:text-5xl">
              UP TO <span className="text-red-700">30% </span>OFF
            </h4>
            <div className="w-full flex justify-center mt-5">
              <Button content="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
