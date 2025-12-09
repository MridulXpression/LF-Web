"use client";
import React, { useState, useEffect } from "react";
import useBlog from "@/hooks/useBlog";
import FashionGrid from "@/components/Blog";

const TrendingBlog = () => {
  const [loading, setLoading] = useState(true);
  const fetchBlogs = useBlog();

  useEffect(() => {
    if (fetchBlogs && fetchBlogs.length > 0) {
      setLoading(false);
    }
  }, [fetchBlogs]);

  const data =
    fetchBlogs?.map((blog, index) => ({
      id: blog.id || index,
      image: blog.image_url,
      title: blog.title,
      description: blog.meta_description,
      size: "medium",
      position: "bottom-left",
    })) || [];

  if (loading || !fetchBlogs || fetchBlogs.length === 0) {
    return null;
  }

  return <FashionGrid data={data} title="TRENDING NOW " />;
};

export default TrendingBlog;
