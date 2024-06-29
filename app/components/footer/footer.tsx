import React from "react";
import {
  companyItems,
  customerServiceItems,
  userItems,
  contactItems,
} from "./footer-items";
import { FooterList } from "./components/footer-list";
import { CompanyInfoList } from "./components/company-info-list";
import { CopyrightNotice } from "./components/copyright-notice";
export const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full lg:max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto text-sm pt-10 pb-5">
          <FooterList footerItemList={companyItems} />
          <FooterList footerItemList={userItems} />
          <FooterList footerItemList={customerServiceItems} />
          <CompanyInfoList contactItems={contactItems} />
        </div>
      </div>
      <CopyrightNotice />
    </>
  );
};
