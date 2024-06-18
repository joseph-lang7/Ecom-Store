import React from "react";
import { Button } from "./button/button";
import { GridCard } from "./grid-card/grid-card";
export const GridCategories = () => {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="max-w-[1400px] w-full">
        <div className="grid grid-cols-3 w-full grid-rows-2 h-[800px] gap-5">
          <GridCard
            imageUrl="man.jpg"
            rowSpan="row-span-2"
            buttonContent="men's"
          />
          <GridCard
            imageUrl="child.jpg"
            rowSpan="row-span-1"
            buttonContent="kid's"
          />
          <GridCard
            imageUrl="woman.jpg"
            rowSpan="row-span-2"
            buttonContent="for women's"
          />
          <GridCard
            imageUrl="accessories.jpg"
            rowSpan="row-span-1"
            buttonContent="accessories"
          />
        </div>
      </div>
    </div>
  );
};
