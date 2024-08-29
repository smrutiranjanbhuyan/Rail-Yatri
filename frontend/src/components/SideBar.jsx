import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/slices/darkModeSlice';
import { logout } from '../store/slices/authSlice';
import { FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { sideNavLinks } from '../constants';

const SideBar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <aside
    className={`fixed inset-y-0 left-0 top-16 z-30 w-64 border-r transition-transform transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-200'}`}
  >
      <div className="flex flex-col h-full p-4">
        {/* Close Button */}
        <button
          className="self-end p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={onClose}
          aria-label="Close Sidebar"
        >
          <FaTimes size={20} />
        </button>
        
        {/* Navigation Links */}
        <nav className="mt-4 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {sideNavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                  to={link.href}
                  onClick={onClose}
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons and Dark Mode Toggle */}
        <div className="mt-4 flex flex-col gap-4">
          <button
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={handleToggle}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        
        {
          isLoggedIn?(  <Link
            className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
              darkMode ? 'bg-red-700 text-white hover:bg-blue-600' : 'bg-red-600 text-white hover:bg-red-500'
            }`}
           onClick={handleLogout}
          >
            Logout
          </Link>):(
              <Link
              className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
              to="/login"
            >
              Login
            </Link>
          )
        }
          <Link
            className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
              darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-green-600 text-white hover:bg-green-500'
            }`}
            to="/signup"
          >
            Register
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
