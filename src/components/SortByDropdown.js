import Image from "next/image";

/**
 * Reusable Sort By Dropdown Component
 * @param {string} collectionId - Unique identifier for the collection
 * @param {string} currentSort - Current sort option selected
 * @param {boolean} isOpen - Whether dropdown is open
 * @param {function} onToggle - Handler to toggle dropdown
 * @param {function} onSortChange - Handler for sort option change
 */
const SortByDropdown = ({
  collectionId,
  currentSort,
  isOpen,
  onToggle,
  onSortChange,
}) => {
  const getSortLabel = () => {
    switch (currentSort) {
      case "lowToHigh":
        return "Price: Low to High";
      case "highToLow":
        return "Price: High to Low";
      case "discount":
        return "Discount";
      default:
        return "Sort By";
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="group h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 bg-white rounded-lg sm:rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-950 inline-flex justify-center items-center gap-1 sm:gap-1.5 cursor-pointer hover:bg-black "
      >
        <div className="flex flex-row justify-start items-center gap-1 sm:gap-1.5">
          <div className="text-center justify-start text-stone-950 group-hover:text-white text-xs sm:text-sm md:text-base font-medium leading-tight sm:leading-5 tracking-wide whitespace-nowrap transition">
            {getSortLabel()}
          </div>
          <Image
            src="/images/sort.svg"
            alt="Sort"
            width={14}
            height={14}
            className="sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:hidden"
          />
          <Image
            src="/images/sort-white.svg"
            alt="Sort"
            width={14}
            height={14}
            className="sm:w-4 sm:h-4 md:w-5 md:h-5 hidden group-hover:block"
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-stone-950 rounded-lg shadow-lg z-10 min-w-[200px]">
          <button
            onClick={() => onSortChange(collectionId, "default")}
            className="w-full px-4 py-3 text-left text-sm md:text-base hover:bg-stone-100 transition"
          >
            Default
          </button>
          <button
            onClick={() => onSortChange(collectionId, "lowToHigh")}
            className="w-full px-4 py-3 text-left text-sm md:text-base hover:bg-stone-100 transition border-t border-stone-200"
          >
            Price: Low to High
          </button>
          <button
            onClick={() => onSortChange(collectionId, "highToLow")}
            className="w-full px-4 py-3 text-left text-sm md:text-base hover:bg-stone-100 transition border-t border-stone-200"
          >
            Price: High to Low
          </button>
          <button
            onClick={() => onSortChange(collectionId, "discount")}
            className="w-full px-4 py-3 text-left text-sm md:text-base hover:bg-stone-100 transition border-t border-stone-200"
          >
            Discount
          </button>
        </div>
      )}
    </div>
  );
};

export default SortByDropdown;
