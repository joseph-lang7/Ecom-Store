import React from "react";

interface Props {
  amount: string;
}

export const CartButtonBadge = ({ amount }: Props) => {
  return (
    <div className="h-[20px] w-[20px] bg-red-700 absolute top-0 right-[-10px] rounded-full flex items-center justify-center">
      <p className="text-[12px] text-white">{amount}</p>
    </div>
  );
};
