import React from "react";
import { ArrowRight } from "lucide-react";

const ViewAllCard = ({ onClick }) => {
  return (
    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-xl flex justify-center items-center">
      <button
        onClick={onClick}
        className="px-4 py-3 sm:px-8 sm:py-4 md:px-10 rounded-[8px] outline outline-2 outline-black text-[#0F0F0F] flex flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 hover:bg-stone-950 hover:text-white transition group cursor-pointer"
      >
        <span className="text-sm sm:text-base md:text-lg font-semibold uppercase">
          View All <br /> Products
        </span>

        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-stone-950 group-hover:bg-white rounded-full flex items-center justify-center flex-shrink-0">
          <ArrowRight className="text-white group-hover:text-stone-950 rotate-[-45deg] w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
    </div>
  );
};

export default ViewAllCard;
