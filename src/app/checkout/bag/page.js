import Navbar from "@/app/(navbar)/Navbar";
import React from "react";
import ShoppingCart from "./CartItems";

const page = () => {
  return (
    <div>
      <Navbar />
      <ShoppingCart />
    </div>
  );
};

export default page;
