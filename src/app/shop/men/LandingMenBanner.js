"use client";
import FashionVideoBackground from "@/components/Banner";
import useHeroText from "@/hooks/useHeroText";

export default function MenBanner() {
  const { heroText, loading } = useHeroText(1);

  return (
    <FashionVideoBackground
      videoUrl="/videos/Lafetch-Men's.mp4"
      heroText={heroText?.text}
      loading={loading}
    />
  );
}
