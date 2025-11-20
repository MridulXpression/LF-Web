import React from "react";
import Navbar from "../(navbar)/Navbar";
import AllBrands from "./AllBrands";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <AllBrands />
      <Footer />
    </div>
  );
};

export default page;
