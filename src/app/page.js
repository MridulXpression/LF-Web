import React from "react";
import Navbar from "./(navbar)/Navbar";
import HomePage from "./(banner)/Banner";
import NewestAtLafetch from "./(new-drops)/Newdrop";
import CategorySection from "./(categorycard)/Categorycard";
import TrendingNowSection from "./(trendingnow)/Trendingnow";
import HomeCarousel from "./(carousel)/Carousel";
import TrendingBlog from "./(newsletter)/Newsletter";
import PhoneAuthModal from "@/components/LoginModal";
import Footer from "@/components/footer";
import ScrollButtons from "@/components/homepage/ScrollButton";
import AppDownloadModal from "@/components/AppDownloadModal";

const page = () => {
  return (
    <div>
      <AppDownloadModal/>
      <Navbar />
      <HomePage />
      <NewestAtLafetch />
      <HomeCarousel />
      <CategorySection />
      <TrendingNowSection />
      <TrendingBlog />
      <PhoneAuthModal />
      <Footer />

      <ScrollButtons/>
    </div>
  );
};

export default page;
