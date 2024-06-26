import React from "react";
import { Button } from "../button/button";

export const CollectionBanner = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-bottom"
      style={{ backgroundImage: "url(/banner-img.jpg)" }}
    >
      <div
        className="w-full flex justify-center h-full items-center
      "
      >
        <div className="flex flex-col gap-5 text-center">
          <h3 className="uppercase text-xl sm:text-2xl text-white">
            new trend 2024
          </h3>
          <div className="flex flex-col gap-3">
            <h2 className="capitalize text-4xl sm:text-5xl font-bold text-white px-10 leading-12">
              vintage collection
            </h2>
            <div className="w-full flex justify-center">
              <span className="w-1/4 h-[5px] bg-neutral-400"></span>
            </div>
          </div>
          <p className="capitalize text-white text-base sm:text-lg">
            big sale of this week
          </p>
          <div className="flex w-full justify-center">
            <div className="max-w-[200px]">
              <Button content="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
