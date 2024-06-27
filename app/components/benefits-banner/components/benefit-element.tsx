import React, { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  description: string;
}

export const BenefitElement = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="text-red-700 text-2xl">{icon}</div>
      <div>{title}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
  );
};
