// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-6 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Oops! The page you're looking for doesn't exist.</p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
        >
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
