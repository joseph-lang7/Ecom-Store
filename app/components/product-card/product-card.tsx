"use client";
import React, { useState } from "react";
import {
  AddToCartButton,
  Tag,
  ProductImage,
  ColorSwatch,
  HeartButton,
} from "./components";

interface Props {
  description: string;
  price: string;
  src: string;
  tagColor?: string;
  tagContent?: string;
  oldPrice?: string;
  hasColorVariants?: boolean;
}

export const ProductCard = ({
  description,
  price,
  src,
  tagColor,
  tagContent,
  oldPrice,
  hasColorVariants,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full h-full border-r-0 lg:border-r-2 flex flex-col gap-5 relative pb-20 hover:shadow-xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tagColor && tagContent && (
        <Tag bgColor={tagColor} content={tagContent} />
      )}
      <ProductImage src={src} />
      <div className="flex flex-col gap-3 items-center ">
        <p className="text-center px-3">{description}</p>

        {tagContent === "sale" ? (
          <div className="flex gap-2">
            <p className="text-neutral-400 line-through">${oldPrice}</p>
            <p className="text-red-700">${price}</p>
          </div>
        ) : (
          <p className="text-red-700">${price}</p>
        )}
        {hasColorVariants && (
          <div className="flex gap-2">
            <ColorSwatch
              bgColor="bg-red-500"
              bgHoverOutline="hover:outline-red-500"
            />
            <ColorSwatch
              bgColor="bg-blue-500"
              bgHoverOutline="hover:outline-blue-500"
            />
            <ColorSwatch
              bgColor="bg-black"
              bgHoverOutline="hover:outline-black"
            />
          </div>
        )}
      </div>
      <AddToCartButton isHovered={isHovered} />
      <HeartButton isHovered={isHovered} />
    </div>
  );
};
