import React from "react";
import Navbar from "./(navbar)/Navbar";
import HomePage from "./(banner)/Banner";
import NewInSection from "./(new-drops)/Newdrop";
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
      <NewInSection />
      <CategorySection />
      <TrendingNowSection />
      <HomeCarousel />
      <TrendingBlog />
      <PhoneAuthModal />
      <Footer />
    </div>
  );
};

export default page;
