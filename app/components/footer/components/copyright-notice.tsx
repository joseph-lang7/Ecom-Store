import React from "react";

export const CopyrightNotice = () => {
  return (
    <div className="w-full max-w-full flex flex-col gap-2 py-5">
      <span className="w-full h-[2px] bg-neutral-300"></span>
      <p className="text-center">
        Copyright @{new Date().getFullYear()}{" "}
        <span className="font-bold">Ecom Store</span>
      </p>
    </div>
  );
};
