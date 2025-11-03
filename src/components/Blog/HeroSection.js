import Image from "next/image";
import React from "react";
import Link from "next/link";

const FashionBlogHero = ({ blogPost, loading }) => {
  const handleBlogClick = () => {
    if (blogPost?.id) {
      localStorage.setItem("selectedBlogId", blogPost.id);
    }
  };

  return (
    <div className="relative w-full bg-white">
      {/* Top Banner */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          height: "400px",
          backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600')`,
        }}
      ></div>

      {blogPost && (
        <Link
          href={`/blogs/${blogPost.id}`}
          target="_blank"
          className="block"
          onClick={handleBlogClick} // ✅ Save ID to localStorage when clicked
        >
          <div
            className="relative max-w-[1400px] mx-auto cursor-pointer"
            style={{
              width: "1200px",
              height: "500px",
              marginTop: "-130px",
            }}
          >
            <div className="w-full h-full flex">
              <div className="relative w-1/2 h-full flex-shrink-0">
                <Image
                  src={blogPost.image_url}
                  alt={blogPost.title}
                  fill
                  className="object-fill border-[8px] border-white"
                />
              </div>

              <div className="w-1/2 p-8 flex flex-col justify-center text-center">
                <p className="text-xs font-semibold tracking-widest text-gray-600 mb-3 uppercase">
                  {blogPost?.category?.name || "FASHION"}
                </p>

                <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
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
          </div>
        </Link>
      )}

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default FashionBlogHero;
