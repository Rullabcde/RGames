import React from "react";
import { motion } from "framer-motion";
import { X, Download } from "lucide-react";

const GameDetail = ({ game, onClose }) => (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">{game.title}</h2>
          <span className="bg-black text-white px-4 py-1 rounded-full font-medium">
            {game.genre}
          </span>
        </div>
        <p className="text-gray-400 mb-6">
          {game.description || game.short_description}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300">Platform</p>
            <p className="font-semibold text-white">{game.platform}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300">Publisher</p>
            <p className="font-semibold text-white">{game.publisher}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300">Developer</p>
            <p className="font-semibold text-white">{game.developer}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300">Release Date</p>
            <p className="font-semibold text-white">{game.release_date}</p>
          </div>
        </div>
        <a
          href={game.game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
          <Download size={20} />
          Play Now
        </a>
      </div>
    </motion.div>
  </div>
);

export default GameDetail;
