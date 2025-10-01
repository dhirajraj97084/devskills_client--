import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Blogs", path: "/blogs" },
    { name: "Notes", path: "/notes" },
    { name: "Contact", path: "/contact" },
    
  ];

  const activeClass = "text-blue-600 font-semibold";

  return (
    <nav className="bg-black/85 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-white">
              DevSkills
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-6 items-center ">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  "text-white hover:text-gray-200 transition-colors " +
                  (isActive ? activeClass : "")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex md:space-x-4 items-center">
            <a
              href="https://www.youtube.com/@YourChannelName"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition text-3xl"
              title="Visit my YouTube channel"
            >
              <FaYoutube />
            </a>
            <NavLink
              to="/login"
              className="px-4 py-2 border border-gray-100 text-white rounded hover:bg-white hover:text-black transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 bg-white rounded  transition"
            >
              Signup
            </NavLink>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-3">
            {/* YouTube icon always visible on mobile */}
            <a
              href="https://www.youtube.com/@YourChannelName"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition text-3xl"
              title="Visit my YouTube channel"
            >
              <FaYoutube />
            </a>
            {/* Hamburger menu */}
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex  justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex  flex-col px-6 space-y-4 mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                "text-white hover:text-gray-200 transition-colors text-lg " +
                (isActive ? activeClass : "")
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/login"
            className="px-4 py-2 border border-gray-200 text-white-600 rounded hover:bg-white hover:text-black transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="px-4 py-2 bg-white text-black rounded hover:bg-blue-700 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </NavLink>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 text-white bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
