import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/slices/darkModeSlice';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-xl border-b py-3 shadow-lg backdrop-blur-md transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between px-4 mx-auto max-w-screen-xl">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link aria-current="page" className="flex items-center" to="/">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
            <p className={`ml-3 text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              RailSathi
            </p>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
            darkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              aria-current={link.href === window.location.pathname ? 'page' : undefined}
              className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'
              }`}
              to={link.href}
            >
              {link.icon && <span className="mr-2">{link.icon}</span>}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons and Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
              darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
              darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-green-600 text-white hover:bg-green-500'
            }`}
            to="/signup"
          >
            Register
          </Link>
          <button
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={handleToggle}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation Links and Action Buttons for Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 absolute inset-x-0 top-full border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                aria-current={link.href === window.location.pathname ? 'page' : undefined}
                className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
                to={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.name}
              </Link>
            ))}
            <Link
              className={`mt-2 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              className={`mt-2 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-green-600 text-white hover:bg-green-500'
              }`}
              to="/signup"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
            <button
              className={`mt-2 p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={handleToggle}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
           
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
