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

  if (loading) {
    return (
      <div className="flex justify-center bg-white items-center min-h-[100vh]">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <FashionGrid data={data} title="TRENDING NOW " />;
};

export default TrendingBlog;
