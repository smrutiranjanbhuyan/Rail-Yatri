import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.darkMode); 
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-20 left-4 p-3 rounded-full ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'
        } dark:bg-gray-200 dark:text-gray-800 shadow-lg z-40`}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar Component */}
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        } p-4`}
      >
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Your main dashboard content goes here */}
        
      </main>
    </div>
  );
};

export default DashBoard;
