import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

interface Props {
  isHovered: boolean;
}

const HeartButton = ({ isHovered }: Props) => {
  return (
    <button
      className={`${
        isHovered
          ? "translate-x-[-25px] opacity-100"
          : "translate-x-0 opacity-0"
      } absolute top-3 right-0 transition-all duration-500 hover:text-red-700`}
    >
      <IoMdHeartEmpty />
    </button>
  );
};
export default HeartButton;
