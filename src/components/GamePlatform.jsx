import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import GameCard from "./GameCard";
import GameDetail from "./GameDetail";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const GamePlatform = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const gamesPerPage = 12;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            headers: {
              "X-RapidAPI-Key":
                "7123d9f69emshc67d2f937ecf44cp10af2ejsn9918495bc479", // API key
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }

        const data = await response.json();
        setGames(data);

        const uniqueGenres = [...new Set(data.map((game) => game.genre))];
        setGenres(uniqueGenres);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const filteredGames = games.filter((game) => {
    const matchesGenre =
      selectedGenre === "All" || game.genre === selectedGenre;
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = filteredGames.slice(
    startIndex,
    startIndex + gamesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-wrap mb-4">
          {genres.slice(0, showAllGenres ? genres.length : 5).map((genre) => (
            <button
              key={genre}
              className={`mx-2 my-1 px-4 py-2 rounded-lg ${
                selectedGenre === genre
                  ? "bg-indigo-700"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedGenre(genre)}>
              {genre}
            </button>
          ))}
          <button
            onClick={() => setShowAllGenres((prev) => !prev)}
            className="mx-2 my-1 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-lg">
            {showAllGenres ? "Hide" : "More"}{" "}
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onClick={() => handleGameClick(game)}
                />
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "opacity-50"
                    : "bg-indigo-700 hover:bg-indigo-600"
                }`}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span className="text-center">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? "opacity-50"
                    : "bg-indigo-700 hover:bg-indigo-600"
                }`}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>
        {selectedGame && (
          <GameDetail
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamePlatform;
