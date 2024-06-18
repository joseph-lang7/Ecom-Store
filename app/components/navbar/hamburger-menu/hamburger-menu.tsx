"use client";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};
