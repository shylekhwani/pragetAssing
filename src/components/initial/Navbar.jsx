import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    "Company",
    "Products",
    "Services",
    "Resources",
    "Industries",
  ];

  return (
    <nav className="w-full flex justify-between items-center py-5 px-8 bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
          PRAGET
        </span>
        <span className="text-2xl font-extrabold text-blue-600">X</span>
      </div>

      {/* Menu Container */}
      <div className="hidden md:flex items-center bg-white rounded-full shadow-sm border border-gray-200 px-6 py-2 space-x-6">
        {menuItems.map((item) => (
          <div
            key={item}
            className="relative group cursor-pointer flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="text-sm font-medium">{item}</span>
            <FaChevronDown size={10} className="mt-0.5" />
          </div>
        ))}
      </div>

      {/* Get in Touch Button */}
      <button className="bg-linear-to-r from-blue-700 to-sky-400 text-white font-medium px-5 py-2 rounded-full shadow hover:opacity-90 transition-all">
        Get In Touch
      </button>
    </nav>
  );
};

export default Navbar;
