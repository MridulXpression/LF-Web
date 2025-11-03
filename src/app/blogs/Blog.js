"use client";
import FashionBlogHero from "@/components/Blog/HeroSection";
import BlogCard from "@/components/Blog/BlogCard";
import useBlog from "@/hooks/useBlog";

const HomePage = () => {
  const getBlog = useBlog();

  const firstBlog = getBlog?.[0]; // Hero blog
  const remainingBlogs = getBlog?.filter((_, index) => index !== 0) || []; // All except index 4

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <FashionBlogHero
        blogPost={firstBlog}
        loading={!getBlog || getBlog.length === 0}
      />

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 ">MUST READS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {remainingBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {remainingBlogs.length === 0 && !getBlog && (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
