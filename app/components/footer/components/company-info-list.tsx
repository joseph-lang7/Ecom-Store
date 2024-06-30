import React, { ReactNode } from "react";
import { Logo } from "../../logo/logo";

interface contactItem {
  label: ReactNode;
}

interface Props {
  contactItems: Array<contactItem>;
}

export const CompanyInfoList = ({ contactItems }: Props) => {
  return (
    <div className="flex flex-col gap-3 px-3">
      <Logo />
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
  );
};
