import Image from "next/image";
import React from "react";

const BlogPostComponent = ({ blogPost }) => {
  if (!blogPost) return null;

  return (
    <div className="bg-white mt-[90px] md:mt-[90px]  lg:mt-[120px]">
      <article className="w-full md:px-[100px] md:py-0 px-4 p-12 mb-4 ">
        {/* Image with Overlay Content */}
        <div className="relative w-full h-[600px] mb-8 overflow-hidden">
          <Image
            src={blogPost.image_url}
            alt={blogPost.title}
            fill
            className="w-full h-full object-fill"
          />

          {/* Overlay Content Box */}
          <div
            className="
  absolute bottom-0 left-0 right-0
  mx-8 mb-8 p-6 max-w-4xl mx-auto
  
  bg-white/25 backdrop-blur-xs
 
  shadow-lg
"
          >
            {/* Category Tag */}
            {/* {blogPost.category && (
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase border border-gray-300 text-gray-800">
                  {blogPost.category}
                </span>
              </div>
            )} */}

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight uppercase">
              {blogPost.title}
            </h1>

            {/* Created At */}
            <time className="block text-sm text-black">
              {blogPost.createdAt
                ? new Date(blogPost.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </time>
          </div>
        </div>

        {/* Rich Text HTML Content */}
        <div
          className="prose prose-lg max-w-none text-[18px]
          prose-headings:font-bold prose-headings:text-black
          prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8
          prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-6
          prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-5
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-gray-600 prose-li:mb-2 text-black"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </article>
    </div>
  );
};

export default BlogPostComponent;
