import React from "react";
import { SubscribeButton } from "./subscribe-btn";
import { Input } from "./input";
export const NewsletterSignUp = () => {
  return (
    <>
      <div className="md:w-[400px] xl:w-[500px] w-full">
        <h3 className="text-xl w-full">Sign up for Send Newsletter</h3>
      </div>
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center w-full">
        <div className="flex w-full justify-center">
          <Input />
          <SubscribeButton />
        </div>
      </div>
    </>
  );
};
