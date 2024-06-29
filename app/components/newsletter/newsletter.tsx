import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SocialIcon } from "./components/social-icon";
import { NewsletterSignUp } from "./components/newsletter-signup";
export const Newsletter = () => {
  return (
    <div className="flex w-full justify-center bg-[#e0dfdf]">
      <div className="w-full lg:max-w-[1400px] h-auto px-3 py-10 flex flex-col md:flex-row items-start gap-7 md:items-center justify-center">
        <NewsletterSignUp />
        <div className="flex gap-3 cursor-pointer">
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaXTwitter />} />
          <SocialIcon icon={<FaLinkedinIn />} />
        </div>
      </div>
    </div>
  );
};
