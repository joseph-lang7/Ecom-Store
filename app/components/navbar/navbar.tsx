import React from "react";
import { DesktopNav } from "./desktop-nav/desktop-nav";

export const Navbar = ({}) => {
  return (
    <nav className="h-[100px] w-full bg-white flex justify-center sticky top-0 z-50">
      <div className="flex w-full justify-between 2xl:w-[1500px] xl:w-[1300px] items-center px-5">
        <div>Logo</div>
        <DesktopNav />
      </div>
    </nav>
  );
};
