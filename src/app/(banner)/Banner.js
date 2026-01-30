import FashionVideoBackground from "@/components/Banner";
import { Heading4 } from "lucide-react";

export default function HomePage() {
  // Mock data inside the page
  const mockData = {
    videoUrl: "/videos/homepage_video.mp4", // keep the video in public folder
    heading1: "india's First",
    heading2: "Homegrown Premium Fashion",
    heading3: "Curated for",
    Heading4: "You",
  };

  return (
    <FashionVideoBackground
      videoUrl={mockData.videoUrl}
      heading1={mockData.heading1}
      heading2={mockData.heading2}
      heading3={mockData.heading3}
      Heading4={mockData.Heading4}
    />
  );
}
