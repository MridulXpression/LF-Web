import React from "react";

const ProductDetails = ({ type, title, brand }) => {
  return (
    <div className=" pt-5 space-y-4">
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
        {type}
      </h3>
      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
        {title}
      </h3>
      <h3 className="text-base  text-black uppercase tracking-wider whitespace-pre-line">
        {brand?.split(". ").join(".\n\n")}
      </h3>
    </div>
  );
};

export default ProductDetails;
