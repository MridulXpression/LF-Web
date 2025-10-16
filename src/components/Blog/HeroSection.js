"use client";
import Image from "next/image";
import React from "react";

const FashionBlogHero = ({ blogPost, loading }) => {
  return (
    <div className="relative w-full bg-white">
      {/* Top Banner - 512px height, positioned at top: 104px */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          height: "400px",
          marginTop: "",
          backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600')`,
        }}
      >
        <div className="absolute inset-0  bg-opacity-30"></div>

        {/* Logo/Header - Top Right */}
        {/* <div className="absolute top-8 right-8 z-20">
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            The <span className="italic">LaFetch</span>{" "}
            <span className="font-light border border-white px-3 py-1 ml-2">
              Blog
            </span>
          </h1>
        </div> */}
      </div>

      {/* Blog Card - Horizontal Layout with Image Left, Text Right */}
      <div
        className="relative max-w-[1400px] mx-auto "
        style={{
          width: "1200px",
          height: "500px",
          marginTop: "-130px",
        }}
      >
        {loading ? (
          <div className="w-full h-full p-8 animate-pulse flex">
            <div className="bg-gray-300 h-full w-1/2 mr-6"></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="h-4 bg-gray-300 w-1/4 mb-4"></div>
              <div className="h-6 bg-gray-300 w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 w-full mb-2"></div>
              <div className="h-4 bg-gray-300 w-5/6"></div>
            </div>
          </div>
        ) : blogPost ? (
          <div className="w-full h-full flex">
            {/* Blog Image - Left Side */}

            <div className="relative w-1/2 h-full flex-shrink-0 ">
              <Image
                src={blogPost.image_url}
                alt={blogPost.title}
                fill
                className="object-fill border-[8px] border-white"
              />
            </div>

            {/* Blog Content - Right Side, Centered Vertically */}
            <div className="w-1/2 p-8 flex flex-col justify-center text-center">
              <p className="text-xs font-semibold tracking-widest text-gray-600 mb-3 uppercase">
                {blogPost?.category?.name || "FASHION"}
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight text-center">
                {blogPost.title}
              </h2>

              <p className="text-sm text-black mb-6 leading-relaxed">
                {blogPost.meta_description}
              </p>

              <div className="text-xs text-gray-500">
                <p className="font-semibold uppercase mb-1">
                  BY {blogPost.author || "VALERIE MCRAE"}
                </p>
                <p>
                  {new Date(blogPost.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-600">No blog post available</p>
          </div>
        )}
      </div>

      {/* Bottom Spacing */}
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default FashionBlogHero;
