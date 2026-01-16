import React from "react";
import Navbar from "../(navbar)/Navbar";
import HomePage from "./Blog";
import Footer from "@/components/footer";
import TrendingBlog from "../(newsletter)/Newsletter";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <TrendingBlog />
      <Footer />
    </div>
  );
};

export default page;
