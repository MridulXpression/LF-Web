import React from "react";
import Navbar from "./(navbar)/Navbar";
import HomePage from "./(banner)/Banner";
import NewestAtLafetch from "./(new-drops)/Newdrop";
import CategorySection from "./(categorycard)/Categorycard";
import TrendingNowSection from "./(trendingnow)/Trendingnow";
import HomeCarousel from "./(carousel)/Carousel";
import TrendingBlog from "./(blog)/Blog";
import PhoneAuthModal from "@/components/LoginModal";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <NewestAtLafetch />
      <HomeCarousel />
      <CategorySection />
      <TrendingNowSection />
      <TrendingBlog />
      <PhoneAuthModal />
      <Footer />
    </div>
  );
};

export default page;
