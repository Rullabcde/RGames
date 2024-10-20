import React from "react";
import { Download, Tag } from "lucide-react";

const GameCard = ({ game, onClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="w-full">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{game.description}</p>
      <div className="flex items-center gap-2 mb-3">
        <Tag size={16} />
        <span className="text-sm text-gray-600">{game.genre}</span>
      </div>
    </div>
    <div className="flex justify-between items-center p-4 bg-gray-50">
      <span className="text-sm text-gray-600">Size: {game.size}</span>
      <button
        onClick={() => onClick(game)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <Download size={16} />
        Details
      </button>
    </div>
  </div>
);

export default GameCard;
