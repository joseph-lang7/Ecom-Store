import React from "react";

interface Props {
  title: string;
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-full flex flex-col text-center items-center">
      <div className="flex flex-col gap-2 w-max">
        <h2 className="text-2xl">{title}</h2>
        <div className="w-full flex justify-center">
          <span className="w-1/3 bg-red-700 h-[2px]"></span>
        </div>
      </div>
    </div>
  );
};
