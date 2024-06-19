import React from "react";

interface Props {
  bgColor: string;
  content: string;
}

const Tag = ({ bgColor, content }: Props) => {
  return (
    <span
      className={`absolute top-3 left-[25px] ${bgColor} text-sm text-white px-5 py-1 capitalize`}
    >
      {content}
    </span>
  );
};
export default Tag;
