import React from "react";
import { ProductCard } from "../product-card/product-card";
import { SectionTitle } from "../section-title/section-title";

export const NewProduct = () => {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="px-3 w-full h-full flex justify-center">
        <div className="w-full md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1400px]">
          <div className="w-full flex flex-col items-center gap-2">
            <SectionTitle title="New Product" />
          </div>
          <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            <ProductCard
              description="Smiley Face Graphic Tee"
              price="100.00"
              src="/shirt.jpg"
              tagColor="bg-green-500"
              tagContent="new"
              hasColorVariants={true}
            />
            <ProductCard
              description="Classic Leather Lace-Up Boot"
              price="159.00"
              src="/boot.jpg"
              tagColor="bg-green-500"
              tagContent="new"
            />
            <ProductCard
              description="Sleek Leather Bifold Wallet"
              price="49.00"
              oldPrice="79.00"
              src="/wallet.jpg"
              tagColor="bg-red-500"
              tagContent="sale"
            />
            <ProductCard
              description="High Top Sneaker"
              price="129.00"
              src="/shoe.jpg"
              hasColorVariants={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
