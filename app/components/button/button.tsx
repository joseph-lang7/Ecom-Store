import React from "react";

interface Props {
  content: string;
}

export const Button = ({ content }: Props) => {
  return (
    <button className="bg-red-700 px-10 py-3 text-white uppercase text-sm hover:bg-black duration-500 transition-colors">
      {content}
    </button>
  );
};
