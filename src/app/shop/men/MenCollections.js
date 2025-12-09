"use client";
import ProductCard from "@/components/Card";
import useCollection from "@/hooks/useCollection";
import { useState } from "react";

const MenCollectionSection = () => {
  const query = "gender=1";
  const collections = useCollection(query);
  const [displayedProductsCount, setDisplayedProductsCount] = useState({});

  const handleExploreMore = (collectionId) => {
    setDisplayedProductsCount((prev) => ({
      ...prev,
      [collectionId]: (prev[collectionId] || 8) + 8,
    }));
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {collections?.map((collection) => {
          const productsToShow = displayedProductsCount[collection.id] || 8;
          const visibleProducts = collection.products?.slice(0, productsToShow);
          const hasMoreProducts = collection.products?.length > productsToShow;

          // Don't show section if no products
          if (!collection.products || collection.products.length === 0) {
            return null;
          }

          return (
            <section key={collection.id} className="mb-16">
              {/* Section Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-wide">
                {collection.name} {/* dynamic title */}
              </h2>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-items-center">
                {visibleProducts?.map((product) => {
                  // Destructure the product properties
                  const images = product.imageUrls;
                  const title = product.title;
                  const price = product.basePrice;
                  const id = product.id;

                  return (
                    <ProductCard
                      key={id}
                      images={images}
                      title={title}
                      brand={product?.brand?.name}
                      price={price}
                      id={id}
                      // Pass the full product object if needed for modal
                      product={product}
                    />
                  );
                })}
              </div>

              {/* Explore More Button */}
              {hasMoreProducts && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => handleExploreMore(collection.id)}
                    className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition cursor-pointer"
                  >
                    Explore More
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MenCollectionSection;
