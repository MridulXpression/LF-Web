"use client";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const handleClick = () => {
    if (blog?.id) {
      localStorage.setItem("selectedBlogId", blog.id);
    }
  };

  return (
    <Link
      href={`/blogs/${blog.id}`}
      onClick={handleClick}
      className="block"
      target="_blank"
    >
      <div className="bg-white overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
        {/* Blog Image */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <Image
            src={blog.image_url}
            alt={blog.title}
            fill
            className="object-fill transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <p className="text-xs font-semibold tracking-widest text-gray-600 mb-2 uppercase">
            {blog?.category?.name || "BEAUTY"}
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {blog.meta_description}
          </p>

          <div className="text-xs text-gray-500">
            <p className="font-semibold uppercase">
              BY {blog.author || "VALERIE MCRAE"}
            </p>
            <p className="mt-1">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
