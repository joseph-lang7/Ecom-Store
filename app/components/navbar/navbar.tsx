"use client";
import React, { useState } from "react";
import { DesktopNav } from "./desktop-nav/desktop-nav";
import { Fade as Hamburger } from "hamburger-react";
import { NavItems } from "./nav-items/nav-items";
import { Logo } from "../logo/logo";
export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="h-[100px] w-full bg-white flex justify-center sticky top-0 z-50">
        <div className="flex w-full justify-between 2xl:w-[1500px] xl:w-[1300px] items-center px-5">
          <Logo />
          <DesktopNav />
          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
      <ul
        className={`${
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        } transition-all duration-500 h-screen w-screen fixed bg-white z-40 flex flex-col items-center justify-center gap-10 text-3xl ease-linear`}
      >
        {NavItems.map((navItem) => (
          <li key={navItem.href}>{navItem.label}</li>
        ))}
      </ul>
    </>
  );
};
