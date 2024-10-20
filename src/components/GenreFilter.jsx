import React from "react";
import { Tag } from "lucide-react";

const GenreFilter = ({ selectedGenre, setSelectedGenre, genres }) => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex flex-wrap gap-3 m-8">
        <button
          onClick={() => setSelectedGenre("All")}
          className={`px-4 py-2 rounded-full transition-all duration-200 ${
            selectedGenre === "All"
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-indigo-50"
          }`}>
          <div className="flex items-center gap-2">
            <Tag size={16} />
            All
          </div>
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              selectedGenre === genre
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-50"
            }`}>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              {genre}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default GenreFilter;
