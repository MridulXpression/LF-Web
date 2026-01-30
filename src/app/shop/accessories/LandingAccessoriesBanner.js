"use client";
import FashionVideoBackground from "@/components/Banner";
import useHeroText from "@/hooks/useHeroText";

export default function AccessoriesBanner() {
  const { heroText, loading } = useHeroText(3);

  return (
    <FashionVideoBackground
      videoUrl="/videos/accessories-banner.mp4"
      heroText={heroText?.text}
      loading={loading}
    />
  );
}
