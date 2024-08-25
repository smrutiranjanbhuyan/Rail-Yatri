import React from 'react';
import { FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ErrorComponent = ({ message, icon = <FaExclamationTriangle />, className = '' }) => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`flex items-center justify-center p-4 rounded-lg border border-red-300 ${
        darkMode
          ? 'bg-gray-800 text-red-400 border-gray-700'
          : 'bg-red-100 text-red-800 border-red-300'
      } ${className}`}
    >
      <span
        className={`mr-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`}
      >
        {icon}
      </span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ErrorComponent;
