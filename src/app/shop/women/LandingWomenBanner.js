"use client";
import FashionVideoBackground from "@/components/Banner";
import useHeroText from "@/hooks/useHeroText";

export default function WomenBanner() {
  const { heroText, loading } = useHeroText(2);

  return (
    <FashionVideoBackground
      videoUrl="/videos/Lafetch-Women.mp4"
      heroText={heroText?.text}
      loading={loading}
    />
  );
}
