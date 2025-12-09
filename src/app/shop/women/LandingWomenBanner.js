import FashionVideoBackground from "@/components/Banner";

export default function WomenBanner() {
  // Mock data inside the page
  const mockData = {
    videoUrl: "/videos/Lafetch-Women.mp4", // keep the video in public folder
    heading1: "Fetch your fashion in a flash",
    heading2: "Premium Jackets at 60 min",
  };

  return (
    <FashionVideoBackground
      videoUrl={mockData.videoUrl}
      heading1={mockData.heading1}
      heading2={mockData.heading2}
      subHeading={mockData.subHeading}
      description={mockData.description}
    />
  );
}
