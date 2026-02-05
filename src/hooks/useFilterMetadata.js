import { useState, useEffect } from "react";
import axiosHttp from "@/utils/axioshttp";

/**
 * Fetches filter metadata (brands, sizes, colors) based on category params.
 * @param {Object} params
 * @param {number|null} params.superCatId
 * @param {number|null} params.catId
 * @param {number|null} params.subCatId
 * @param {number|null} params.collectionId
 * @param {Array} params.brandIds
 * @returns {Object} { brands, sizes, colors, loading, error }
 */
export default function useFilterMetadata({
  superCatId,
  catId,
  subCatId,
  collectionId,
  brandIds = [],
}) {
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const params = {};
    if (superCatId) params.superCatId = superCatId;
    if (catId) params.catId = catId;
    if (subCatId) params.subCatId = subCatId;
    if (collectionId) params.collectionId = collectionId;
    if (brandIds && brandIds.length > 0) params.brandId = brandIds.join(",");
    axiosHttp
      .get("/filter-metadata", { params })
      .then((res) => {
        const data = res?.data?.data || {};
        setBrands((data.brands || []).map((b) => ({ id: b.id, name: b.name })));
        setSizes(data.sizes || []);
        setColors(data.colors || []);
      })
      .catch((err) => {
        setError(err);
        setBrands([]);
        setSizes([]);
        setColors([]);
      })
      .finally(() => setLoading(false));
  }, [superCatId, catId, subCatId, collectionId, brandIds]);

  return { brands, sizes, colors, loading, error };
}
