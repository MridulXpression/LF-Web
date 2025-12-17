"use client";
import React from "react";
import useBlog from "@/hooks/useBlog";
import FashionGrid from "@/components/Blog";

const TrendingBlog = () => {
  const fetchBlogs = useBlog();

  const data =
    fetchBlogs?.map((blog, index) => ({
      id: blog.id || index,
      image: blog.image_url,
      title: blog.title,
      description: blog.meta_description,
      size: "medium",
      position: "bottom-left",
    })) || [];

  if (!fetchBlogs || fetchBlogs.length === 0) {
    return null; // no content
  }

  return <FashionGrid data={data} title="NEWSLETTERS" />;
};

export default TrendingBlog;
