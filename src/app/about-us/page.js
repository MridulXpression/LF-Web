"use client";
import React from "react";

const AboutUsPage = () => {
  const sections = [
    {
      id: "who-we-are",
      title: "Who We Are",
      text: `At LaFetch, we believe the future of fashion is homegrown, fast, and thoughtfully curated.
Founded in 2025, LaFetch is India’s first premium marketplace dedicated to showcasing homegrown fashion labels—brands that celebrate originality, craftsmanship, and culture.

We’re on a mission to rewrite what “Made in India” means, bringing it to the center of modern India’s fashion canvas.`,
    },
    {
      id: "trust",
      title: "Authenticated, Verified & Validated",
      text: `We believe fashion without trust is merely fabric.

That’s why every brand featured on LaFetch is handpicked. Each product is authenticated directly from the brand, trend-validated with real demand, and #LFVerified across branding, design, and legal checks.

This commitment redefines integrity and reliability in the Indian e-commerce ecosystem.`,
    },
    {
      id: "speed",
      title: "Fashion, at the Speed of Now",
      text: `We don’t believe style should wait.

With 60-minute delivery across Delhi NCR, LaFetch redefines quick-commerce—bringing fashion to your doorstep as instantly as your cravings.

Beyond NCR, our pan-India express shipping ensures your style finds you, wherever you are.`,
    },
    {
      id: "culture",
      title: "Curated for the Culture",
      text: `Every brand on LaFetch is chosen with intent.

From streetwear rebels to heritage revivalists, we spotlight designers crafting for the Gen-Next consumer at heart. Our Inspiration Board helps you discover, plan, and play with fashion in ways that feel authentically you.`,
    },
    {
      id: "experience",
      title: "An Experience Beyond a Transaction",
      text: `To unbox LaFetch is to open a story.

From premium packaging to seamless exchanges and effortless returns, every detail is designed to match the fashion it carries. We consider every touchpoint to ensure your experience is not just smooth—but memorable.`,
    },
    {
      id: "movement",
      title: "More Than a Marketplace",
      text: `We’re not just building a marketplace—we’re building a movement.

One that puts India’s homegrown brands at the forefront of modern fashion, while delivering it to you faster than ever before.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0f1110] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            About LaFetch
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            A premium marketplace redefining homegrown fashion in modern India.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
