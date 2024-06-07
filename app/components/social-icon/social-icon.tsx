import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
}
export const SocialIcon = ({ icon }: Props) => {
  return (
    <div className="bg-black hover:bg-red-700 transition-colors duration-500 h-[50px] w-[50px] px-5 py-3 flex justify-center items-center rounded-full mt-10 cursor-pointer">
      <div className="text-white">{icon}</div>
    </div>
  );
};
