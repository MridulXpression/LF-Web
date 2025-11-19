import React from "react";
import Navbar from "../(navbar)/Navbar";
import Footer from "@/components/footer";
import CategoryPage from "./Categories";

const page = () => {
  return (
    <div>
      <Navbar />
      <CategoryPage />
      <Footer />
    </div>
  );
};

export default page;
