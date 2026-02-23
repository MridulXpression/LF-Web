"use client";
import React from "react";

const ContactUsPage = () => {
  const sections = [
    {
      id: "trust",
      title: "Get in Touch",
      text: `Have a question, feedback, or need help with your LaFetch order? Our team's got you covered. `,
    },
    {
      id: "help",
      title: "Help, made effortless",
      text: `Finding answers is quick and easy. Head to LaFetch Support to browse FAQs on orders, delivers, returns
      and more. Log in to get step-by-step assistance tailored to your recent purchases-because smooth shopping matters.`,
    },
    {
      id: "support",
      title: "Need quick support?",
      text: `For time-sensitive queries or to speak to our team directly, email us at customersupport@la-fetch.com.
       We are available every day, 10:30 a.m. to 7:00 p.m.`,
    },
    {
      id: "writing",
      title: "Prefer writing to us?",
      text: `You can also reach us by post at:
      LaFetch HQ 
      6th Floor, Universal Trade Tower,
      Sector - 49, Gurugram - 122018`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0f1110] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Need Help ?
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            With Orders
          </p>
          <p className="text-gray-300  max-w-3xl">
            With Brands
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-3xl font-bold text-gray-900">
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

export default ContactUsPage;
