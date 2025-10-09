import React from "react";
import ShopByCategoriesPage from "./Productlisting";
import Navbar from "../(navbar)/Navbar";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <ShopByCategoriesPage />
      <Footer />
    </div>
  );
};

export default page;
