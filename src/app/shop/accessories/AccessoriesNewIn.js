"use client";
import Link from "next/link";
import ProductCard from "@/components/Card";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const NewInSection = () => {
  const query = "gender=3";
  const fetchproducts = useProducts(query);
  const { products = [] } = useProducts(query);
  const topProducts = products.slice(0, 8);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 tracking-wide">
          NEW IN
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] justify-items-center">
          {topProducts.map((product, index) => {
            const isLast = index === topProducts.length - 1;

            if (isLast) {
              return (
                <div key={product.id} className="w-full">
                  <div className="relative w-[160px] h-[240px] md:w-[300px] md:h-[380px]">
                    {/* Product Image + Overlay */}
                    {product?.imageUrls?.[0] ? (
                      <Image
                        src={product.imageUrls[0]}
                        alt={product.title || "Product Image"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-300" />
                    )}

                    <Link
                      href="/products?gender=3" // explore page
                      className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg"
                    >
                      Explore All →
                    </Link>
                  </div>
                </div>
              );
            }

            // Default card
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
      {/* Toaster Component */}
      <Toaster />
    </section>
  );
};

export default NewInSection;
