import FashionVideoBackground from "@/components/Banner";
import { Heading3 } from "lucide-react";

export default function MenBanner() {
  // Mock data inside the page
  const mockData = {
    videoUrl: "/videos/Lafetch-Men's.mp4", // keep the video in public folder
    heading1: "Homegrown Fashion Edit",
    heading2: "Handpicked Styles ",
    heading3: "Chosen for Him",
  };

  return (
    <FashionVideoBackground
      videoUrl={mockData.videoUrl}
      heading1={mockData.heading1}
      heading2={mockData.heading2}
      heading3={mockData.heading3}
    />
  );
}
