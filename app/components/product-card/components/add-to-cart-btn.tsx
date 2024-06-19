import React from "react";

interface Props {
  isHovered: boolean;
}

const AddToCartButton = ({ isHovered }: Props) => {
  return (
    <button
      className={`${
        isHovered ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-0"
      } w-full py-3 bg-red-700 text-white absolute bottom-0 transition-all duration-500 hover:bg-black`}
    >
      Add to Cart
    </button>
  );
};
export default AddToCartButton;
