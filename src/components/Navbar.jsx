// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const categories = ["ipl", "Anime", "politics", "sports", "technology", "health", "business", "entertainment"];

export default function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${query.trim()}`);
      setQuery("");
      setMenuOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="bg-gradient-to-r from-white to-blue-50 shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl font-extrabold text-blue-700 tracking-wide hidden sm:block">
            NewsHub
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {categories.map((cat) => (
            <li
              key={cat}
              className="hover:text-blue-600 hover:underline underline-offset-4 cursor-pointer capitalize transition-all"
              onClick={() => navigate(`/category/${cat}`)}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search news..."
            className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-52 transition focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow"
          >
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6 text-blue-700" /> : <Menu className="w-6 h-6 text-blue-700" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pt-3 pb-5 shadow-md space-y-3 animate-fade-in-down">
          <ul className="flex flex-col gap-3">
            {categories.map((cat) => (
              <li
                key={cat}
                className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer capitalize"
                onClick={() => {
                  navigate(`/category/${cat}`);
                  setMenuOpen(false);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Search news..."
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm w-full shadow-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              Go
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
