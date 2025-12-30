"use client";
import FashionBlogHero from "@/components/Blog/HeroSection";
import BlogCard from "@/components/Blog/BlogCard";
import useNewsletter from "@/hooks/useNewsletter";

const HomePage = () => {
  const getNewsletter = useNewsletter();

  const firstBlog = getNewsletter?.[0]; // Hero blog
  const remainingBlogs = getNewsletter?.filter((_, index) => index !== 0) || []; // All except index 4

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <FashionBlogHero
        blogPost={firstBlog}
        loading={!getBlog || getNewsletter.length === 0}
      />

      {/* Blog Grid Section */}
      {remainingBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 ">MUST READS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {remainingBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}

      {!firstBlog && remainingBlogs.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              No Blogs Available
            </h3>
            <p className="text-gray-600 max-w-md">
              We're working on bringing you the latest fashion insights and
              trends. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
