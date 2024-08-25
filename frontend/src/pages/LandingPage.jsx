import React from "react";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <main
      className={`relative min-h-screen mx-4 sm:mx-8 md:mx-12 lg:mx-24 my-12 sm:my-16 md:my-20 lg:my-28 pb-8 px-4 py-4 rounded-xl ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto max-w-screen-lg">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-12">
          <div
            className={`typewriter-container text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            } leading-tight`}
          >
            Welcome to Your Railway Website
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Discover the ease and convenience of modern rail travel with our
            new website. Explore schedules, book tickets, and manage your
            journey all in one place.
          </p>
          <a
            href="#features"
            className={`inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ${
              darkMode ? "hover:bg-blue-500" : ""
            }`}
          >
            Explore Now
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div
              className={`p-4 sm:p-6 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                Real-Time Schedules
              </h3>
              <p
                className={`text-sm sm:text-base md:text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Get the latest information on train timings and routes to plan
                your journey effortlessly.
              </p>
            </div>
            <div
              className={`p-4 sm:p-6 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                Easy Ticket Booking
              </h3>
              <p
                className={`text-sm sm:text-base md:text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Book your tickets quickly and securely with our user-friendly
                booking system.
              </p>
            </div>
            <div
              className={`p-4 sm:p-6 rounded-lg shadow-lg text-center ${
                darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                Interactive Route Maps
              </h3>
              <p
                className={`text-sm sm:text-base md:text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Explore detailed route maps to find the best connections and
                travel options.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Have questions or need assistance? Contact us for support or
            feedback.
          </p>
          <a
            href="/contact"
            className={`inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ${
              darkMode ? "hover:bg-blue-500" : ""
            }`}
          >
            Contact Us
          </a>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
