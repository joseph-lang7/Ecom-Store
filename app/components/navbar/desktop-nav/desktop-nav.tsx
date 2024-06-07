"use client";
import React from "react";
import { NavItems } from "../nav-items/nav-items";
import { FaSearch } from "react-icons/fa";
import { NavButton } from "../nav-button/nav-button";
import { FaUser } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { usePathname } from "next/navigation";
interface navItem {
  href: string;
  label: string;
}

export const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-5 items-center">
        {NavItems!.map((navItem: navItem) => (
          <li
            className={`${
              pathname === navItem.href && "text-red-700"
            } hover:text-red-700 transition-colors duration-500 cursor-pointer`}
            key={navItem.href}
          >
            {navItem.label}
          </li>
        ))}
        <li className="flex gap-3">
          <NavButton cartIcon={false} icon={<FaSearch />} />
          <NavButton cartIcon={false} icon={<FaUser />} />
          <NavButton cartIcon={true} icon={<IoIosCart />} />
        </li>
      </ul>
    </nav>
  );
};
