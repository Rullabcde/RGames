import React from "react";
import { Download, Tag } from "lucide-react";

const GameDetail = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
          <p className="text-gray-600 mb-4">{game.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-2">
              <Tag size={16} />
              {game.genre}
            </span>
            <span>Size: {game.size}</span>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Close
            </button>
            <a
              href={game.downloadLink}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Download size={16} />
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
