"use client";
import Link from "next/link";
import ProductCard from "@/components/Card";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import { useState } from "react";

const NewInSection = () => {
  const { products = [] } = useProducts(); // FIX HERE
  const topProducts = products.slice(0, 8);

  // State for fallback image (for last card)
  const [fallbackSrc, setFallbackSrc] = useState("/images/sample-product1.png");

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 tracking-wide">
          NEW IN
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-items-center">
          {topProducts.map((product, index) => {
            const isLast = index === topProducts.length - 1;

            // LAST CARD SPECIAL
            if (isLast) {
              return (
                <div key={product.id} className="w-full">
                  <div className="relative w-[160px] h-[240px] md:w-[300px] md:h-[380px]">
                    <Image
                      src={product.imageUrls?.[0] || fallbackSrc}
                      alt={product.title}
                      fill
                      className="object-cover"
                      onError={() =>
                        setFallbackSrc("/images/sample-product1.png")
                      }
                    />

                    <Link
                      href="/products"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg"
                    >
                      Explore All →
                    </Link>
                  </div>

                  <h3 className="mt-2 text-sm md:text-lg text-black text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    Rs. {product.basePrice}
                  </p>
                </div>
              );
            }

            return (
              <ProductCard
                key={product.id}
                images={product.imageUrls}
                title={product.title}
                brand={product?.brand?.name}
                price={product.basePrice}
                id={product.id}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewInSection;
