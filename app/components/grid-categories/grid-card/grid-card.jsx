"use client";
import React, { useState } from "react";
import { Button } from "../button/button";
export const GridCard = ({ imageUrl, rowSpan, buttonContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`inline-block overflow-hidden ${rowSpan} relative group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-cover bg-center group-hover:scale-110 transition-all duration-500 h-full"
        style={{ backgroundImage: `url(/${imageUrl})` }}
      ></div>
      <Button content={buttonContent} />
      <span
        className={`${
          isHovered
            ? "translate-y-0 opacity-40 "
            : "translate-y-[-120%] opacity-0"
        } transition-all duration-300 absolute inset-0 bg-gray-300 w-full h-full ease-linear`}
      ></span>
    </div>
  );
};
