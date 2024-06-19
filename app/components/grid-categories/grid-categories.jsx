import React from "react";
import { GridCard } from "./grid-card/grid-card";
export const GridCategories = () => {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="px-3 w-full h-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:grid-rows-2 h-[800px] gap-3 md:h-[400px] md:w-[700px] lg:h-[500px] lg:w-[800px] xl:h-[600px] xl:w-[900px] 2xl:w-[1400px]">
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
            buttonContent="women's"
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
