import Navbar from "@/app/(navbar)/Navbar";
import React from "react";
import ShoppingCart from "./CartItems";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default page;
