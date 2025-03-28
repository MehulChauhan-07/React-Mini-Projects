import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { useTheme } from "@context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/counter", label: "Counter" },
    { path: "/todo", label: "Todo App" },
    { path: "/tictactoe", label: "Tic Tac Toe" },
    { path: "/api-explorer", label: "API Explorer" },
  ];

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold flex items-center">
          React Mini Projects
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-blue-400"
                  : "text-gray-200 hover:text-blue-400"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/MehulChauhan-07/React-Mini-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400"
            aria-label="GitHub Repository"
          >
            <FaGithub size={20} />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-700 text-white"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-slate-800 z-10 py-4 px-6 md:hidden shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive ? "font-medium text-blue-400" : "text-gray-200"
                  }`
                }
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
              <a
                href="https://github.com/MehulChauhan-07/React-Mini-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200"
                aria-label="GitHub Repository"
              >
                <FaGithub size={20} />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-700 text-white"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
