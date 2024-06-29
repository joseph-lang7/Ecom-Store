import React from "react";
import {
  companyItems,
  customerServiceItems,
  userItems,
  contactItems,
} from "./footer-items";
export const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full lg:max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto text-sm pt-10 pb-5">
          <ul className="flex flex-col gap-3 px-3">
            {companyItems.map((item, idx) => (
              <li
                className="hover:text-red-700 transition-colors duration-500 cursor-pointer"
                key={idx}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 px-3">
            {userItems.map((item, idx) => (
              <li
                className="hover:text-red-700 transition-colors duration-500 cursor-pointer"
                key={idx}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 px-3 ">
            {customerServiceItems.map((item, idx) => (
              <li
                className="hover:text-red-700 transition-colors duration-500 cursor-pointer"
                key={idx}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-3">
            <div>Logo</div>
            <ul className="flex flex-col gap-1">
              {contactItems.map((item, idx) => (
                <li
                  className="hover:text-red-700 transition-colors duration-500 cursor-pointer"
                  key={idx}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full flex flex-col gap-2 py-5">
        <span className="w-full h-[2px] bg-neutral-300"></span>
        <p className="text-center">
          Copyright @{new Date().getFullYear()}{" "}
          <span className="font-bold">Ecom Store</span>
        </p>
      </div>
    </>
  );
};
