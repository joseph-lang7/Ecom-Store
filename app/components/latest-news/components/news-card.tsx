"use client";
import React, { useState } from "react";
interface Props {
  image: string;
}
export const NewsCard = ({ image }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` relative h-[400px] w-full max-w-[400px] text-xs overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(/${image})` }}
      >
        <div
          className={`${
            isHovered
              ? "translate-y-0 opacity-100 "
              : "translate-y-[-120%] opacity-0"
          } text-white w-full h-full z-10 absolute flex flex-col items-center justify-center transition-all duration-300 gap-3`}
        >
          <h3 className="text-2xl">Trend Of 2024</h3>
          <p className="text-xs">Jun 09, 2024 | BY ADMIN</p>
          <p>This is the description of the blog post...</p>
          <a href="/" className="text-red-500 underline-animation">
            READ MORE
          </a>
        </div>
      </div>
      <span
        className={`${
          isHovered
            ? "translate-y-0 opacity-70 "
            : "translate-y-[-120%] opacity-0"
        } transition-all duration-300 absolute inset-0 bg-black w-full h-full ease-linear`}
      ></span>
    </div>
  );
};
