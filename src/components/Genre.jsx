import React from "react";

const genres = ["All", "Action", "Adventure", "Racing", "Sports"];

const GenreFilter = ({ selectedGenre, setSelectedGenre }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {genres.map((genre) => (
      <button
        key={genre}
        onClick={() => setSelectedGenre(genre)}
        className={`px-4 py-2 rounded-full ${
          selectedGenre === genre
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}>
        {genre}
      </button>
    ))}
  </div>
);

export default GenreFilter;
