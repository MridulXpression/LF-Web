import React from "react";
import { ArrowRight } from "lucide-react";

const ViewAllCard = ({ onClick }) => {
  return (
    <div className="w-full h-[400px] rounded-xl flex justify-center items-center">
      <button
        onClick={onClick}
        className="px-10 py-4 rounded-[8px] outline outline-2 outline-black text-[#0F0F0F] flex flex-row items-center justify-between gap-6 hover:bg-stone-950 hover:text-white transition group cursor-pointer"
      >
        <span className="text-lg font-semibold uppercase ">
          View All <br /> Products
        </span>

        <div className="w-10 h-10 bg-stone-950 group-hover:bg-white rounded-full flex items-center justify-center flex-shrink-0">
          <ArrowRight className="text-white group-hover:text-stone-950 rotate-[-45deg]" />
        </div>
      </button>
    </div>
  );
};

export default ViewAllCard;
