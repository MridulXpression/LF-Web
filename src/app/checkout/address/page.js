import Navbar from "@/app/(navbar)/Navbar";
import React from "react";
import CheckOutAddress from "./Address";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CheckOutAddress />
      <Footer />
    </div>
  );
};

export default page;
