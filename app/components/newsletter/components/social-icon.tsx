import React, { ReactElement } from "react";

interface Props {
  icon: ReactElement;
}

export const SocialIcon = ({ icon }: Props) => {
  return (
    <div className="hover:text-red-700 transition-colors duration-500">
      {icon}
    </div>
  );
};
