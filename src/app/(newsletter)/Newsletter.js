"use client";
import React from "react";
import useNewsletter from "@/hooks/useNewsletter";
import FashionGrid from "@/components/Blog";

const TrendingBlog = () => {
  const fetchNewsletter = useNewsletter();
  const data =
    fetchNewsletter?.map((blog, index) => ({
      id: blog.id || index,
      image: blog.image_url,
      title: blog.title,
      description: blog.content,
      size: "medium",
      position: "bottom-left",
    })) || [];

  if (!fetchNewsletter || fetchNewsletter.length === 0) {
    return null; // no content
  }

  return <FashionGrid data={data} title="NEWSLETTERS" />;
};

export default TrendingBlog;
