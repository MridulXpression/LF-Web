"use client";
import Link from "next/link";

const SortSelector = ({ searchQuery, onSortChange, isSortLoading }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {!searchQuery && (
          <>
            <span className="text-sm text-black">Sort by:</span>
            <select
              onChange={onSortChange}
              disabled={isSortLoading}
              className="text-sm text-black border border-gray-300 rounded px-3 py-1 disabled:opacity-50"
            >
              <option>All Products</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Discount</option>
              <option>Newest First</option>
            </select>
          </>
        )}
      </div>

      {searchQuery && (
        <Link
          href="/products"
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Clear search
        </Link>
      )}
    </div>
  );
};

export default SortSelector;
