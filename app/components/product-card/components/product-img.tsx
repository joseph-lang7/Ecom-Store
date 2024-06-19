import React from "react";

interface Props {
  src: string;
}

const ProductImage = ({ src }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <img src={src} alt="image" className="h-[300px] w-full object-cover" />
    </div>
  );
};
export default ProductImage;
