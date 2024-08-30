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
import { CiLocationOn } from "react-icons/ci";

const iconMapping = {
  "tea-stall": <FaCoffee className="text-green-500 text-sm" />,
  bookstore: <FaBook className="text-blue-500 text-sm" />,
  shop: <FaAddressCard className="text-red-500 text-sm" />,
  restaurant: <FaUtensils className="text-orange-500 text-sm" />,
  hotel: <FaBed className="text-purple-500 text-sm" />,
  "car-rental": <FaCar className="text-yellow-500 text-sm" />,
  repair: <FaWrench className="text-gray-500 text-sm" />,
  "shopping-mall": <FaShoppingCart className="text-teal-500 text-sm" />,
  hospital: <FaHospital className="text-red-600 text-sm" />,
  bank: <FaLandmark className="text-blue-800 text-sm" />,
  "bicycle-rental": <FaBicycle className="text-green-700 text-sm" />,
  atm: <FaDollarSign className="text-green-600 text-sm" />,
  "music-venue": <FaMusic className="text-purple-600 text-sm" />,
  park: <FaTree className="text-green-800 text-sm" />,
  award: <FaTrophy className="text-yellow-600 text-sm" />,
  "music-shop": <FaGuitar className="text-brown-600 text-sm" />,
  theater: <FaTheaterMasks className="text-red-700 text-sm" />,
  "train-station": <FaTrain className="text-blue-600 text-sm" />,
  "gas-station": <FaGasPump className="text-gray-700 text-sm" />,
  "bus-stop": <FaBus className="text-yellow-600 text-sm" />,
  "taxi-stand": <FaTaxi className="text-orange-500 text-sm" />,
  university: <FaUniversity className="text-blue-700 text-sm" />,
  school: <FaSchool className="text-green-600 text-sm" />,
  office: <FaBuilding className="text-gray-600 text-sm" />,
  landmark: <FaLandmark className="text-brown-600 text-sm" />,
  "fire-station": <FaFireExtinguisher className="text-red-500 text-sm" />,
  warehouse: <FaWarehouse className="text-orange-600 text-sm" />,
  clinic: <FaHospital className="text-green-500 text-sm" />,
  playground: <FaChild className="text-yellow-700 text-sm" />,
};

const MarkerContent = ({ title, type }) => {
  const icon = iconMapping[type] || (
    <CiLocationOn className="text-red-500 text-sm" />
  );

  return (
    <div className="flex items-center space-x-2">
      {icon}
      {title && (
        <span className="text-base sm:text-sm md:text-sm lg:text-2sm font-medium text-blue-800">
          {title}
        </span>
      )}
    </div>
  );
};

export default MarkerContent;
