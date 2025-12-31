"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useNewsletter from "@/hooks/useNewsletter";
import BlogPostComponent from "@/components/Blog/BlogPost";
import Navbar from "@/app/(navbar)/Navbar";
import Footer from "@/components/footer";

export default function BlogDetailsPage() {
  const params = useParams();
  const newsletters = useNewsletter();
  const [newsletterData, setNewsletterData] = useState(null);

  useEffect(() => {
    if (params?.id && params.id[0] && newsletters.length > 0) {
      const newsletterId = params.id[0];
      const foundNewsletter = newsletters.find(
        (newsletter) => newsletter.id === Number(newsletterId)
      );
      setNewsletterData(foundNewsletter || null);
    }
  }, [params?.id, newsletters]);

  if (!newsletters.length) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  if (!newsletterData) {
    return (
      <div className="text-center py-10 text-gray-500">
        Newsletter not found or failed to load.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <BlogPostComponent blogPost={newsletterData} />
      <Footer />
    </>
  );
}
