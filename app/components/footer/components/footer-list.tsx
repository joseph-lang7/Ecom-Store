import React, { ReactNode } from "react";

interface FooterItem {
  label: ReactNode;
}

interface Props {
  footerItemList: Array<FooterItem>;
}

export const FooterList = ({ footerItemList }: Props) => {
  return (
    <ul className="flex flex-col gap-3 px-3">
      {footerItemList.map((item, idx) => (
        <li
          className="hover:text-red-700 transition-colors duration-500 cursor-pointer"
          key={idx}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
