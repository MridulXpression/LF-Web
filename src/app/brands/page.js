import React from "react";
import Navbar from "../(navbar)/Navbar";
import AllBrands from "./AllBrands";
import Footer from "@/components/footer";
import TrendingBlog from "../(newsletter)/Newsletter";

const page = () => {
  return (
    <div>
      <Navbar />
      <AllBrands />
      <TrendingBlog />
      <Footer />
    </div>
  );
};

export default page;
