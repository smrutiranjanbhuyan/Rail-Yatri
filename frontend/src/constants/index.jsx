import { FaHome, FaMap, FaTachometerAlt, FaPhone, FaInfoCircle, FaTrain, FaSearch, FaCalendar, FaTicketAlt, FaMapMarkerAlt, FaBus, FaClock } from 'react-icons/fa';

// Main navigation links
const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: <FaHome />,
  },
  {
    name: 'Routes',
    href: '/routes',
    icon: <FaMap />,
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <FaTachometerAlt />,
  },
  {
    name: 'Contact Us',
    href: '/contact',
    icon: <FaPhone />,
  },
  {
    name: 'About Us',
    href: '/about',
    icon: <FaInfoCircle />,
  },
];

// Sidebar navigation links
const sideNavLinks = [
  // {
  //   name: 'Search Station',
  //   href: '/search-station',
  //   icon: <FaMapMarkerAlt />,
  // },
  {
    name: 'Search Train',
    href: 'search-train',
    icon: <FaTrain />,
  },
  // {
  //   name: 'Trains Between Stations',
  //   href: '/trains-between-stations',
  //   icon: <FaMapMarkerAlt />,
  // },
  // {
  //   name: 'Get Train Live Status',
  //   href: '/train-live-status',
  //   icon: <FaClock />,
  // },
  // {
  //   name: 'Get Train Schedule',
  //   href: '/train-schedule',
  //   icon: <FaCalendar />,
  // },
  // {
  //   name: 'Get PNR Status',
  //   href: '/pnr-status',
  //   icon: <FaTicketAlt />,
  // },
  // {
  //   name: 'Check Seat Availability',
  //   href: '/check-seat-availability',
  //   icon: <FaSearch />,
  // },
  // {
  //   name: 'Get Train Classes',
  //   href: '/train-classes',
  //   icon: <FaBus />,
  // },
  // {
  //   name: 'Get Fare',
  //   href: '/fare',
  //   icon: <FaInfoCircle />,
  // },
  // {
  //   name: 'Get Trains By Station',
  //   href: '/trains-by-station',
  //   icon: <FaMapMarkerAlt />,
  // },
  // {
  //   name: 'Get Live Station',
  //   href: '/live-station',
  //   icon: <FaTrain />,
  // },
];

export { navLinks, sideNavLinks };
