"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints"; // adjust import path as needed
import BlogPostComponent from "@/components/Blog/BlogPost";
import Navbar from "@/app/(navbar)/Navbar";
import Footer from "@/components/footer";

export default function BlogDetailsPage() {
  const params = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBlogDetails = async (id) => {
    try {
      const res = await axiosHttp.get(`${endPoints.getBlogbyid}/${id}`);
      const data = res?.data?.data;
      setBlogData(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.id && params.id[0]) {
      setLoading(true);
      setBlogData(null);
      const blogId = params.id[0];
      getBlogDetails(blogId);
    }
  }, [params?.id]);

  if (loading) {
    return (
      <div className="flex justify-center bg-white items-center min-h-[100vh]">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="text-center py-10 text-gray-500">
        Blog not found or failed to load.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <BlogPostComponent blogPost={blogData} />
      <Footer />
    </>
  );
}
