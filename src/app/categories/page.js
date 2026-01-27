import React from "react";
import Navbar from "../(navbar)/Navbar";
import Footer from "@/components/footer";
import CategoryPage from "./Categories";
import TrendingBlog from "../(newsletter)/Newsletter";

const page = () => {
  return (
    <div>
      <Navbar />
      <CategoryPage />
      <TrendingBlog />
      <Footer />
    </div>
  );
};

export default page;
