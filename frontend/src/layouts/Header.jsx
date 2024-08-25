import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/slices/darkModeSlice'; 
import { FaMoon, FaSun } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import { logo } from '../assets';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={darkMode ? 'bg-gray-900' : 'bg-white'}>
      <header
        className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 border-gray-100'}`}
      >
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center shrink-0">
              <Link aria-current="page" className="flex items-center" to="/">
                <img
                  className="h-7 w-auto"
                  src={logo}
                  alt="logo"
                />
                <p className="ml-3 text-lg font-bold leading-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}">RailSathi</p>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link
                aria-current="page"
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'} transition-all duration-200`}
                to="#"
              >
                How it works
              </Link>
              <Link
                className={`inline-block rounded-lg px-2 py-1 text-sm font-medium ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'} transition-all duration-200`}
                to="#"
              >
                Pricing
              </Link>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Link
                className={`hidden items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset transition-all duration-150 ${darkMode ? 'bg-gray-700 text-gray-300 ring-gray-600 hover:bg-gray-600' : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50'} sm:inline-flex`}
                to="/login"
              >
                Sign in
              </Link>
              <Link
                className={`inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold shadow-sm transition-all duration-150 ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
                to="/login"
              >
                Login
              </Link>
              <button
                className={`ml-3 p-2 rounded-full ${darkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'}`}
                onClick={handleToggle}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
