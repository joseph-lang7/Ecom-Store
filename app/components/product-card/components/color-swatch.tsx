import React from "react";

interface Props {
  bgColor: string;
  bgHoverOutline: string;
}

const ColorSwatch = ({ bgColor, bgHoverOutline }: Props) => {
  return (
    <div className="flex gap-3">
      <span
        className={`${bgColor} w-[25px] h-[25px] rounded-full hover:outline hover:outline-offset-[3px] cursor-pointer ${bgHoverOutline}`}
      ></span>
    </div>
  );
};
export default ColorSwatch;
