import React from "react";
import { motion } from "framer-motion";

const GameCard = ({ game, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    whileHover={{ y: -5 }}
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    onClick={onClick}>
    <div className="relative">
      <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
        {game.genre}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{game.title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">
        {game.short_description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{game.platform}</span>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          {game.publisher}
        </div>
      </div>
    </div>
  </motion.div>
);

export default GameCard;
