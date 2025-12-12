"use client";
import { useSelector } from "react-redux";

export default function GlobalLoader() {
  const isLoading = useSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4 shadow-lg">
        <div className="border-4 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin" />
        <p className="text-gray-600 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
