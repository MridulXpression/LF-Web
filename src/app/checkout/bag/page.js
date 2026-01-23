import Navbar from "@/app/(navbar)/Navbar";
import React from "react";
import ShoppingCart from "./CartItems";
import Footer from "@/components/footer";
import CartBanner from "./CartBanner";

const page = () => {
  return (
    <div>
      <Navbar />
      <ShoppingCart />
      <CartBanner />
      <Footer />
    </div>
  );
};

export default page;
