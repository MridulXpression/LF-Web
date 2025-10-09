"use client";
import ProductCard from "@/components/Card";
import useProducts from "@/hooks/useProducts";

const MenNewInSection = () => {
  const query = "gender=1";
  const fetchproducts = useProducts(query);
  console.log(fetchproducts, "fetch");

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 tracking-wide">
          NEW IN
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-[20px] justify-items-center">
          {fetchproducts?.map((product) => {
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
                price={price}
                id={id}
                // Pass the full product object if needed for modal
                product={product}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenNewInSection;
