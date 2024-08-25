import React from 'react';

const MarkerDetails = ({ title, description, image }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg max-w-xs">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-32 object-cover rounded-t-lg mb-3" 
        />
      )}
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default MarkerDetails;
