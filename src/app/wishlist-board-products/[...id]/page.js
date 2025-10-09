import Navbar from "@/app/(navbar)/Navbar";
import React from "react";
import WishlistProductCard from "./WishlistProductCard";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <WishlistProductCard />
      <Footer />
    </div>
  );
};

export default page;
