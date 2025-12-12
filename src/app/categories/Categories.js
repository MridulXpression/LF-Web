"use client";
import ListingCard from "@/components/ListingCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useCategoryProducts from "@/hooks/useSubCategoryHierarchy";

const CategoryPage = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId"); // <-- get id from URL

  const { categoryProducts, isCategoryLoading } =
    useCategoryProducts(categoryId);

  if (!categoryProducts) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {categoryProducts.name}
          </h1>
        </div>

        {/* Subcategories */}
        <div className="space-y-12">
          {categoryProducts.children
            ?.filter((subcategory) => subcategory.products?.length > 0)
            .map((subcategory) => {
              const firstFiveProducts = subcategory.products?.slice(0, 5);

              return (
                <div
                  key={subcategory.id}
                  className="border-b border-gray-200 pb-12 last:border-b-0"
                >
                  {/* Subcategory Name */}
                  <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-900 uppercase tracking-wide">
                      {subcategory.name}
                    </h2>

                    {/* Desktop View All */}
                    {subcategory.products?.length > 5 && (
                      <Link
                        href={`/products?subCategoryId=${subcategory.id}`}
                        className="hidden lg:block text-[#808080] border-b border-[#808080] text-sm "
                      >
                        View All →
                      </Link>
                    )}
                  </div>

                  {/* Products */}
                  {firstFiveProducts?.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {firstFiveProducts.map((product) => (
                        <ListingCard
                          key={product.id}
                          id={product.id}
                          imageUrls={product.imageUrls}
                          title={product.title}
                          brand={product.brand?.name || ""}
                          rating={product.rating}
                          reviewCount={product.numReviews}
                          basePrice={product.basePrice}
                          mrp={product.mrp}
                          discountPercentage={
                            product.mrp && product.basePrice
                              ? Math.round(
                                  ((product.mrp - product.basePrice) /
                                    product.mrp) *
                                    100
                                )
                              : null
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">
                        No products available in this subcategory
                      </p>
                    </div>
                  )}

                  {/* Mobile View All */}
                  {subcategory.products?.length > 5 && (
                    <div className="mt-4 text-center lg:hidden">
                      <Link
                        href={`/subcategory/${subcategory.id}`}
                        className="text-blue-600 font-medium hover:underline"
                      >
                        View All Products
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
