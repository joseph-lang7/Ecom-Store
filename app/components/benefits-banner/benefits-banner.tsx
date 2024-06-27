import React from "react";
import { FaTruck } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BenefitElement } from "./components/benefit-element";

export const BenefitsBanner = () => {
  return (
    <div className="bg-[#e0dfdf] py-7 flex flex-col gap-10">
      <BenefitElement
        icon={<FaTruck />}
        title="Free Shipping"
        description="Free Shipping on all orders over $99"
      />
      <BenefitElement
        icon={<FaHandHoldingDollar />}
        title="Competitive Pricing"
        description="Get the best deals"
      />
      <BenefitElement
        icon={<FaGift />}
        title="Free Gift"
        description="Free Gift with every order"
      />
      <BenefitElement
        icon={<FaRegClock />}
        title="Open All Week"
        description="9:00am - 9:00pm"
      />
    </div>
  );
};
