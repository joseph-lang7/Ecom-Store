"use client";
import React, { ReactNode, useState } from "react";

interface Props {
  icon: ReactNode;
  cartIcon: boolean;
}

export const NavButton = ({ icon, cartIcon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full relative">
      <button
        className={`${
          cartIcon ? "bg-slate-300" : "bg-transparent"
        } hover:bg-slate-300 hover:text-red-700 h-[50px] w-[50px] rounded-full flex items-center justify-center transition-colors duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon}
      </button>

      <div
        className={`${
          isHovered && cartIcon ? "opacity-100" : "opacity-0"
        } absolute right-0 bg-slate-200 w-[300px] top-[75px] h-[40px] flex items-center justify-center transition-all duration-500 py-7`}
      >
        <p className="text-sm">No Items in Shopping Cart.</p>
      </div>
    </div>
  );
};
