import FashionVideoBackground from "@/components/Banner";

export default function HomePage() {
  // Mock data inside the page
  const mockData = {
    videoUrl: "/videos/homepage_video.mp4", // keep the video in public folder
    heading1: "ndia's First",
    heading2: "Homegrown Premium Fashion",
    heading3: "Curated for You",
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
