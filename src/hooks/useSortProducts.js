import { useState } from "react";

/**
 * Custom hook for managing product sorting functionality
 * Handles sort state, dropdown visibility, and sorting logic
 */
const useSortProducts = () => {
  const [sortOrders, setSortOrders] = useState({}); // Track sort order per collection
  const [showSortDropdown, setShowSortDropdown] = useState({}); // Track dropdown visibility per collection

  const handleSortChange = (collectionId, sortOption) => {
    setSortOrders((prev) => ({
      ...prev,
      [collectionId]: sortOption,
    }));
    setShowSortDropdown((prev) => ({
      ...prev,
      [collectionId]: false,
    }));
  };

  const toggleSortDropdown = (collectionId) => {
    setShowSortDropdown((prev) => ({
      ...prev,
      [collectionId]: !prev[collectionId],
    }));
  };

  const sortProducts = (products, sortOrder) => {
    if (!sortOrder || sortOrder === "default") return products;

    const sortedProducts = [...products];
    if (sortOrder === "lowToHigh") {
      return sortedProducts.sort((a, b) => {
        const priceA = a.basePrice || a.price || 0;
        const priceB = b.basePrice || b.price || 0;
        return priceA - priceB;
      });
    } else if (sortOrder === "highToLow") {
      return sortedProducts.sort((a, b) => {
        const priceA = a.basePrice || a.price || 0;
        const priceB = b.basePrice || b.price || 0;
        return priceB - priceA;
      });
    } else if (sortOrder === "discount") {
      return sortedProducts.sort((a, b) => {
        const priceA = a.basePrice || a.price || 0;
        const mrpA = a.mrp || priceA;
        const discountA = mrpA > 0 ? ((mrpA - priceA) / mrpA) * 100 : 0;

        const priceB = b.basePrice || b.price || 0;
        const mrpB = b.mrp || priceB;
        const discountB = mrpB > 0 ? ((mrpB - priceB) / mrpB) * 100 : 0;

        return discountB - discountA; // Highest discount first
      });
    }
    return sortedProducts;
  };

  return {
    sortOrders,
    showSortDropdown,
    handleSortChange,
    toggleSortDropdown,
    sortProducts,
  };
};

export default useSortProducts;
