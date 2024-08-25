import {
  FaCoffee,
  FaBook,
  FaAddressCard,
  FaShoppingCart,
  FaUtensils,
  FaBed,
  FaCar,
  FaWrench,
  FaHospital,
  FaBicycle,
  FaDollarSign,
  FaMusic,
  FaTree,
  FaTrophy,
  FaGuitar,
  FaTheaterMasks,
  FaTrain,
  FaGasPump,
  FaBus,
  FaTaxi,
  FaUniversity,
  FaSchool,
  FaBuilding,
  FaLandmark,
  FaFireExtinguisher,
  FaWarehouse,
  FaChild,
} from "react-icons/fa";

const iconMapping = {
  "tea-stall": <FaCoffee className="text-green-500 text-xl" />,
  bookstore: <FaBook className="text-blue-500 text-xl" />,
  shop: <FaAddressCard className="text-red-500 text-xl" />,
  restaurant: <FaUtensils className="text-orange-500 text-xl" />,
  hotel: <FaBed className="text-purple-500 text-xl" />,
  "car-rental": <FaCar className="text-yellow-500 text-xl" />,
  repair: <FaWrench className="text-gray-500 text-xl" />,
  "shopping-mall": <FaShoppingCart className="text-teal-500 text-xl" />,
  hospital: <FaHospital className="text-red-600 text-xl" />,
  bank: <FaLandmark className="text-blue-800 text-xl" />,
  "bicycle-rental": <FaBicycle className="text-green-700 text-xl" />,
  atm: <FaDollarSign className="text-green-600 text-xl" />,
  "music-venue": <FaMusic className="text-purple-600 text-xl" />,
  park: <FaTree className="text-green-800 text-xl" />,
  award: <FaTrophy className="text-yellow-600 text-xl" />,
  "music-shop": <FaGuitar className="text-brown-600 text-xl" />,
  theater: <FaTheaterMasks className="text-red-700 text-xl" />,
  "train-station": <FaTrain className="text-blue-600 text-xl" />,
  "gas-station": <FaGasPump className="text-gray-700 text-xl" />,
  "bus-stop": <FaBus className="text-yellow-600 text-xl" />,
  "taxi-stand": <FaTaxi className="text-orange-500 text-xl" />,
  university: <FaUniversity className="text-blue-700 text-xl" />,
  school: <FaSchool className="text-green-600 text-xl" />,
  office: <FaBuilding className="text-gray-600 text-xl" />,
  landmark: <FaLandmark className="text-brown-600 text-xl" />,
  "fire-station": <FaFireExtinguisher className="text-red-500 text-xl" />,
  warehouse: <FaWarehouse className="text-orange-600 text-xl" />,
  clinic: <FaMusic className="text-green-500 text-xl" />,
  playground: <FaChild className="text-yellow-700 text-xl" />,
};

const MarkerContent = ({ title, type }) => {
  const icon = iconMapping[type] || (
    <FaAddressCard className="text-gray-500 text-xl" />
  );

  return (
    <span className="ml-3 text-lg font-medium text-gray-800"> {icon}</span>
  );
};

export default MarkerContent;
