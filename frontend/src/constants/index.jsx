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

  {
    name: 'Search Train',
    href: 'search-train',
    icon: <FaTrain />,
  },

];


const points = [
  {
    coordinates: [85.84405727684498, 20.267414119900707],
    title: "A/C Waiting Hall",
    type: "waiting-hall",
    description: "Air-conditioned waiting hall for passengers.",
  },
  {
    coordinates: [85.84266319870949, 20.26720999766692],
    title: "Auto Taxi Stand",
    type: "taxi-stand",
    description: "Stand for auto rickshaws and taxis.",
  },
  {
    coordinates: [85.84273260086775, 20.265459379008057],
    title: "Cloak Room",
    type: "cloak-room",
    description: "Cloak room for storing personal belongings.",
  },
  {
    coordinates: [85.8437867090106, 20.26663977496542],
    title: "Drinking Water Station",
    type: "drinking-water",
    description: "Available drinking water station.",
  },
  {
    coordinates: [85.8439302071929, 20.267234530091347],
    title: "First-Class Waiting Hall",
    type: "waiting-hall",
    description: "Premium waiting area for first-class passengers.",
  },
  {
    coordinates: [85.84382995963097, 20.26717508613317],
    title: "Food Plaza",
    type: "food-plaza",
    description: "Area with various food outlets.",
  },
  {
    coordinates: [85.84351178258657, 20.265498694232452],
    title: "IRCTC Food Plaza",
    type: "food-plaza",
    description: "Food plaza managed by IRCTC.",
  },
  {
    coordinates: [85.84374144673347, 20.267106206597603],
    title: "IRCTC Retaining Room",
    type: "retaining-room",
    description: "Retaining room managed by IRCTC.",
  },
  {
    coordinates: [85.84334716200829, 20.26674167923133],
    title: "Medicine Store",
    type: "medicine-store",
    description: "Store for purchasing medicines.",
  },
  {
    coordinates: [85.84377966821194, 20.26712444866936],
    title: "Mio Amior",
    type: "store",
    description: "Retail store offering various items.",
  },
  {
    coordinates: [85.84324825555086, 20.266655500936743],
    title: "New Ticket Counter",
    type: "ticket-counter",
    description: "Newly established ticket counter.",
  },
  {
    coordinates: [85.84356106817722, 20.26693259229011],
    title: "Punjab National Bank ATM",
    type: "atm",
    description: "ATM for Punjab National Bank.",
  },
  {
    coordinates: [85.84368277341127, 20.266170511247633],
    title: "Platforms 2 and 3",
    type: "platform",
    description: "Platforms 2 and 3 for train boarding.",
  },
  {
    coordinates: [85.84284760057926, 20.265593365251952],
    title: "Platform 1",
    type: "platform",
    description: "Platform 1 for train boarding.",
  },
  {
    coordinates: [85.84370087832212, 20.266640404004306],
    title: "Quick RO Service",
    type: "ro-service",
    description: "Quick Reverse Osmosis water service.",
  },
  {
    coordinates: [85.84391813725233, 20.26698637500395],
    title: "Railway Lodge",
    type: "lodge",
    description: "Official lodging facility for railway staff.",
  },
  {
    coordinates: [85.84242079406977, 20.265599026639983],
    title: "Railway Mail Service Post Office",
    type: "post-office",
    description: "Post office for railway mail services.",
  },
  {
    coordinates: [85.84438383579254, 20.267844065237295],
    title: "Railway Parcel Office",
    type: "parcel-office",
    description: "Office for handling railway parcels.",
  },
  {
    coordinates: [85.84313526749611, 20.26629285963254],
    title: "Railway Police Station",
    type: "police-station",
    description: "Police station for railway security.",
  },
  {
    coordinates: [85.8433485031128, 20.26648912007932],
    title: "Railway Retiring Room",
    type: "retiring-room",
    description: "Retiring room for railway passengers.",
  },
  {
    coordinates: [85.84296595305204, 20.265340489708866],
    title: "Railway Station New FOB",
    type: "station",
    description: "Newly constructed foot overbridge.",
  },
  {
    coordinates: [85.84383230656385, 20.266692299703422],
    title: "Railway Station Platform 1",
    type: "platform",
    description: "Platform 1 at the railway station.",
  },
  {
    coordinates: [85.84361739456654, 20.266605492342407],
    title: "Railway Station Retiring Room",
    type: "retiring-room",
    description: "Retiring room at the railway station.",
  },
  {
    coordinates: [85.84279362112284, 20.2665189994525],
    title: "Old Ticket Counter 1",
    type: "ticket-counter",
    description: "Old ticket counter 1.",
  },
  {
    coordinates: [85.84345947951078, 20.26686968850757],
    title: "State Bank of India ATM",
    type: "atm",
    description: "ATM for State Bank of India.",
  },
  {
    coordinates: [85.84355503320694, 20.265351183459074],
    title: "New Ticket Counter 2",
    type: "ticket-counter",
    description: "Newly established ticket counter 2.",
  },
  {
    coordinates: [85.84174018353224, 20.26671368701681],
    title: "Town Bus Terminal",
    type: "bus-terminal",
    description: "Bus terminal for local and intercity buses.",
  },
  {
    coordinates: [85.84295354783535, 20.266959640908762],
    title: "Washroom",
    type: "washroom",
    description: "Public washroom facility.",
  },
];

export { navLinks, sideNavLinks ,points};
