import React, { useState } from "react";

// Modal Component for Creating New Board (UI only)
const NewBoardModal = ({ isOpen, onClose, onCreateBoard, loading }) => {
  const [boardName, setBoardName] = useState("");

  const handleCreate = () => {
    if (!boardName.trim()) return;
    onCreateBoard(boardName); // just pass the name to parent
    setBoardName(""); // reset after creating
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 w-96 rounded-md">
        <h2 className="text-xl mb-4 text-black">Create New Board</h2>
        <input
          type="text"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder="Board Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-1 focus:ring-black text-black"
          required
        />
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:text-black"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={loading || !boardName.trim()}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:bg-gray-400"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBoardModal;
