import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../store/slices/darkModeSlice";
import Select from "react-select";
import { HiMenu } from "react-icons/hi";
import { FaSearch, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { setUrl } from "../store/slices/urlSlice";
const options = [
  {
    value:
      "https://sketchfab.com/models/1762162e14a445d4bd2a40db53f796ba/embed",
    label: "New Delhi (NDLS)",
  },
  { value: "CSTM", label: "Chhatrapati Shivaji Maharaj Terminus (CSTM)" },
  { value: "HWH", label: "Howrah Junction (HWH)" },
  { value: "SBC", label: "Bengaluru City Junction (SBC)" },
  { value: "MAS", label: "Chennai Central (MAS)" },
  { value: "BCT", label: "Mumbai Central (BCT)" },
  { value: "SC", label: "Secunderabad Junction (SC)" },
  { value: "LKO", label: "Lucknow Junction (LKO)" },
  { value: "CNB", label: "Kanpur Central (CNB)" },
  { value: "PUNE", label: "Pune Junction (PUNE)" },
  { value: "ADI", label: "Ahmedabad Junction (ADI)" },
  {
    value:
      "https://sketchfab.com/models/9129cc6528c343ca81d505e8406bd020/embed",
    label: "Bhopal Junction (BPL)",
  },
  {
    value:
      "https://sketchfab.com/models/dd08ac2b989c48c3883a0cf21499d288/embed",
    label: "Bhubaneswar (BBS)",
  },
  { value: "JP", label: "Jaipur Junction (JP)" },
  { value: "GHY", label: "Guwahati (GHY)" },
  { value: "AGC", label: "Agra Cantt (AGC)" },
  { value: "VSKP", label: "Visakhapatnam (VSKP)" },
  { value: "ASR", label: "Amritsar Junction (ASR)" },
  { value: "RJPB", label: "Rajendra Nagar Terminal (RJPB)" },
  { value: "TVC", label: "Thiruvananthapuram Central (TVC)" },
];

const customStyles = (darkMode) => ({
  control: (provided) => ({
    ...provided,
    backgroundColor: darkMode ? "#374151" : "#FFFFFF",
    borderColor: darkMode ? "#4B5563" : "#E5E7EB",
    color: darkMode ? "#FFFFFF" : "#000000",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: darkMode ? "#FFFFFF" : "#000000",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: darkMode ? "#374151" : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#000000",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? darkMode
        ? "#1F2937"
        : "#F3F4F6"
      : darkMode
      ? "#374151"
      : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#000000",
  }),
});

const RoutesNavbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleToggleDarkMode = () => dispatch(toggleDarkMode());

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
    dispatch(setUrl(option.value));
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        className={`fixed top-16 left-4 p-2 rounded-full shadow-md focus:outline-none z-50 ${
          darkMode ? "text-white bg-gray-700" : "text-gray-900 bg-white"
        }`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <HiMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 top-14 z-30 w-64 border-r bg-${
          darkMode ? "gray-900" : "gray-100"
        } border-${
          darkMode ? "gray-700" : "gray-200"
        } transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
              className={`p-2 w-full bg-${
                darkMode ? "gray-700" : "white"
              } text-${darkMode ? "white" : "black"} border-${
                darkMode ? "gray-600" : "gray-300"
              }`}
            />
            <FaSearch
              className={`text-${darkMode ? "white" : "gray-500"} p-2`}
            />
          </div>

          {/* Select Field */}
          <div className="mt-4">
            <Select
              options={options}
              styles={customStyles(darkMode)}
              placeholder="Select Station"
              onChange={handleChange}
              value={selectedOption}
            />
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/routes"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Show Nearby Stations
                </Link>
              </li>

              <li>
                <Link
                  to="3d"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  3d view
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Buttons and Dark Mode Toggle */}
          <div className="mt-4 flex flex-col gap-4">
            <button
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "text-gray-300 bg-gray-700 hover:bg-gray-600"
                  : "text-gray-900 bg-gray-100 hover:bg-gray-200"
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
