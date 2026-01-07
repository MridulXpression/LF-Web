import FashionVideoBackground from "@/components/Banner";

export default function AccessoriesBanner() {
  // Mock data inside the page
  const mockData = {
    videoUrl: "/videos/accessories-banner.mp4", // keep the video in public folder
    heading1: "Homegrown Fashion Edit",
    heading2: "Handpicked Styles",
    heading3: "Chosen for You",
  };

  return (
    <FashionVideoBackground
      videoUrl={mockData.videoUrl}
      heading1={mockData.heading1}
      heading2={mockData.heading2}
      heading3={mockData.heading3}
      subHeading={mockData.subHeading}
      description={mockData.description}
    />
  );
}
