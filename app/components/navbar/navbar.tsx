import React from "react";
import { DesktopNav } from "./desktop-nav/desktop-nav";

export const Navbar = ({}) => {
  return (
    <nav className="h-[100px] w-full bg-white flex justify-center fixed">
      <div className="flex w-full justify-between max-w-[1500px] items-center">
        <div>Logo</div>
        <DesktopNav />
      </div>
    </nav>
  );
};
