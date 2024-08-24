import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
    {/* Navbar */}
    <nav className="bg-gray-900 bg-opacity-75 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-widest">Station Guide</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>

    {/* Header with background image */}
    <header className="relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: "url('/images/image2.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center z-10">
        <h2 className="text-5xl font-extrabold">Welcome to the Station Guide</h2>
        <p className="mt-4 text-lg font-light">Your gateway to seamless station navigation</p>
      </div>
    </header>

    {/* Main content - interactive cards */}
    <div className="container mx-auto p-4">
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/* Mapping & Navigation Card */}
        <div onClick={() => navigate('/mapping-and-navigation')} className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform">
          <div className="relative">
            <img src="/images/mapping-nav.jpg" alt="Mapping and Navigation" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 rounded-t-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Mapping & Navigation</h3>
          </div>
          <p className="mt-4 text-gray-700">Find your way around the station with our interactive maps.</p>
        </div>

        {/* Facility Markers & Information Card */}
        <div onClick={() => navigate('/facility-markers-and-information')} className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform">
          <div className="relative">
            <img src="/images/facilities-info.jpg" alt="Facility Markers and Information" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 rounded-t-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Facility Markers & Information</h3>
          </div>
          <p className="mt-4 text-gray-700">Locate important facilities within the station.</p>
        </div>

        {/* Train Arrival Information Card */}
        <div onClick={() => navigate('/train-arrival-information')} className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform">
          <div className="relative">
            <img src="/images/train-info.jpg" alt="Train Arrival Information" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 rounded-t-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Train Arrival Information</h3>
          </div>
          <p className="mt-4 text-gray-700">Stay updated on train schedules and platforms.</p>
        </div>

        {/* Routing & Directions Card */}
        <div onClick={() => navigate('/routing-and-direction')} className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform">
          <div className="relative">
            <img src="/images/routing-direction.jpg" alt="Routing and Direction" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 rounded-t-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">Routing & Directions</h3>
          </div>
          <p className="mt-4 text-gray-700">Get directions to your destination within the station.</p>
        </div>

        {/* User Interaction Card */}
        <div onClick={() => navigate('/user-interaction')} className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-2 hover:scale-105 transition-transform">
          <div className="relative">
            <img src="/images/user-interaction.jpg" alt="User Interaction" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 rounded-t-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">User Interaction</h3>
          </div>
          <p className="mt-4 text-gray-700">Engage with station services and get support.</p>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="bg-gray-900 bg-opacity-75 text-white p-4 text-center mt-auto">
      © 2024 Station Guide. All rights reserved.
    </footer>
  </div>
  );
};

export default HomePage;
