import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const darkMode = useSelector(state => state.darkMode.darkMode);

  return (
    <footer
      className={`py-6 px-4 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Social Media Links */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start">
          <a
            href="https://facebook.com"
            className={`mx-2 text-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-900 hover:text-gray-700'}`}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className={`mx-2 text-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-900 hover:text-gray-700'}`}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className={`mx-2 text-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-900 hover:text-gray-700'}`}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className={`mx-2 text-lg ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-900 hover:text-gray-700'}`}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Footer Links */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0`}>
            &copy; 2024 Your Company. All Rights Reserved.
          </p>
          <ul className="list-reset flex flex-wrap justify-center gap-4 text-xs md:text-sm">
            <li>
              <Link to="/contact" className={`hover:text-blue-600 ${darkMode ? 'text-gray-400 hover:text-gray-100' : 'text-gray-900 hover:text-gray-700'}`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className={`hover:text-blue-600 ${darkMode ? 'text-gray-400 hover:text-gray-100' : 'text-gray-900 hover:text-gray-700'}`}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className={`hover:text-blue-600 ${darkMode ? 'text-gray-400 hover:text-gray-100' : 'text-gray-900 hover:text-gray-700'}`}>
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
