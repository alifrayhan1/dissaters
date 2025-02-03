import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { navSource } from "../Source";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
  }, [showMobileMenu]);

  return (
    <>
    <nav className="bg-lighter py-4 border-b border-light w-full">
      <div className="flex justify-between items-center px-6">
        <a href="#">
          <img src="Logo.png" alt="Brand Logo" className="w-28" />
        </a>

        <ul className="hidden lg:flex gap-6 text-light">
          {navSource.map((item, index) => (
            <li
              key={index}
              className={`relative text-sm font-medium py-2 transition ${
                activeNavItem === index
                  ? "text-dark font-extrabold border-b-2 border-orange"
                  : "text-light"
              }`}
              onClick={() => setActiveNavItem(index)}
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? " font-bold" : ""
                }
              >
                <a
                  href={item.link}
                  className="hover:text-orange transition duration-300 ease-in-out"
                >
                  {item.title}
                </a>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="relative flex items-center bg-white p-2 rounded-full cursor-pointer shadow-md">
            <img src="bellIcon.png" alt="Notification" className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full"></span>
          </span>

          <div className="hidden sm:flex items-center gap-2">
            <img
              src="profile.png"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="text-light">
              <h1 className="font-semibold text-base">Usman Zafar</h1>
              <p className="text-sm text-gray-500">usmanzafar@gmail.com</p>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setShowMobileMenu(true)}>
            <AlignJustify size={28} />
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="fixed inset-0 bg-light bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setShowMobileMenu(false)}
          >
            <X size={32} />
          </button>

          <ul className="text-white text-xl space-y-6">
            {navSource.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? " font-bold" : ""
                  }
                >
                  <a
                    href={item.link}
                    className="hover:text-orange transition"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.title}
                  </a>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  
    </>
  );
}

export default Navbar;
