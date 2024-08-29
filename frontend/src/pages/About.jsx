// src/pages/About.jsx
import React from 'react';
import { useSelector } from 'react-redux';


const About = () => {
  // Assuming you have some data in the Redux store
 

  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-6">
        <div className="w-full max-w-4xl p-8 shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-[#F0F0F0]">
            About Us
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-[#F0F0F0]">
            Welcome to our comprehensive railway station navigation system! Our
            mission is to enhance passenger experiences by providing an intuitive, user-friendly,
            and real-time navigation solution for railway stations across the globe.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-opacity-50 bg-white rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#F0F0F0]">
                Our Mission
              </h2>
              <p className="text-[#E0E0E0]">
                To provide an accessible, efficient, and stress-free way for passengers
                to navigate through complex railway stations, ensuring they reach their
                destinations smoothly.
              </p>
            </div>
            <div className="bg-opacity-50 bg-white rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-4 text-[#F0F0F0]">
                Our Vision
              </h2>
              <p className="text-[#E0E0E0]">
                To revolutionize how passengers interact with railway environments, setting a new
                standard for travel convenience and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;
