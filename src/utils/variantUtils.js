export const getParsedSelectedOptions = (selectedOptions) => {
  if (!selectedOptions) return [];

  if (Array.isArray(selectedOptions)) return selectedOptions;

  if (typeof selectedOptions === "string") {
    try {
      const parsed = JSON.parse(selectedOptions);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  return [];
};
