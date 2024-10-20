import React from "react";
import { Search } from "lucide-react";
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
            className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition text-sm sm:text-base"
          />
          <div className="absolute inset-y-0 right-3 sm:right-4 flex items-center pointer-events-none">
            <Search className="text-white/60 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
