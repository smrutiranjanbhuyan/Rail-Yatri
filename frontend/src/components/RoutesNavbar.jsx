import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/slices/darkModeSlice';
import Select from 'react-select';
import { HiMenu } from 'react-icons/hi';
import { FaSearch, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const customStyles = (darkMode) => ({
  control: (provided) => ({
    ...provided,
    backgroundColor: darkMode ? '#374151' : '#FFFFFF',
    borderColor: darkMode ? '#4B5563' : '#E5E7EB',
    color: darkMode ? '#FFFFFF' : '#000000',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: darkMode ? '#FFFFFF' : '#000000',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: darkMode ? '#374151' : '#FFFFFF',
    color: darkMode ? '#FFFFFF' : '#000000',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? (darkMode ? '#1F2937' : '#F3F4F6') : (darkMode ? '#374151' : '#FFFFFF'),
    color: darkMode ? '#FFFFFF' : '#000000',
  }),
});

const RoutesNavbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleToggleDarkMode = () => dispatch(toggleDarkMode());

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        className={`fixed top-16 left-4 p-2 rounded-full shadow-md focus:outline-none z-50 ${
          darkMode ? 'text-white bg-gray-700' : 'text-gray-900 bg-white'
        }`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <HiMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 top-14 z-30 w-64 border-r bg-${darkMode ? 'gray-900' : 'gray-100'} border-${darkMode ? 'gray-700' : 'gray-200'} transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Close Button */}
          <button
            className="self-end p-2 rounded-full text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <FaTimes size={20} />
          </button>

          {/* Search Field */}
          <div className="mt-4 flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 w-full bg-${darkMode ? 'gray-700' : 'white'} text-${darkMode ? 'white' : 'black'} border-${darkMode ? 'gray-600' : 'gray-300'}`}
            />
            <FaSearch className={`text-${darkMode ? 'white' : 'gray-500'} p-2`} />
          </div>

          {/* Select Field */}
          <div className="mt-4">
            <Select
              options={options}
              styles={customStyles(darkMode)}
              placeholder="Select option"
            />
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Buttons and Dark Mode Toggle */}
          <div className="mt-4 flex flex-col gap-4">
            <button
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-900 bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={handleToggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
          aria-label="Close sidebar overlay"
        />
      )}
    </div>
  );
};

export default RoutesNavbar;
