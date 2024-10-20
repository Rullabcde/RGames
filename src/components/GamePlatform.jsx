import React, { useState, useEffect } from "react";
import { Search, X, Download, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Header = ({ searchTerm, setSearchTerm }) => (
  <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <h1 className="text-2xl sm:text-4xl font-bold">Rull Games</h1>
        </div>

        <div className="relative w-full sm:max-w-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search games..."
            className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/10 
                     backdrop-blur-sm text-white placeholder-white/60 
                     border border-white/20 focus:outline-none focus:ring-2 
                     focus:ring-white/30 transition text-sm sm:text-base"
          />
          <div className="absolute inset-y-0 right-3 sm:right-4 flex items-center pointer-events-none">
            <Search className="text-white/60 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

const GenreFilter = ({ selectedGenre, setSelectedGenre, genres }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
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
  );
};

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

const GamePlatform = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const gamesPerPage = 12;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            headers: {
              "X-RapidAPI-Key":
                "7123d9f69emshc67d2f937ecf44cp10af2ejsn9918495bc479", // Ganti dengan API key Anda
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }

        const data = await response.json();
        setGames(data);

        // Extract unique genres
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

  // Filtered games based on search and genre
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Pagination logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading games...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="max-w-7xl mx-auto p-6">
        <GenreFilter
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          genres={genres}
        />
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {currentGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => setSelectedGame(game)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-opacity ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
          </button>

          <span className="text-white font-semibold">
            {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-opacity ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
          </button>
        </div>

        <AnimatePresence>
          {selectedGame && (
            <GameDetail
              game={selectedGame}
              onClose={() => setSelectedGame(null)}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default GamePlatform;
