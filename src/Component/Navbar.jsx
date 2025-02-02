import { navSource } from "../Source";
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-lighter py-4 border-b border-light w-full overflow-x-hidden">
      <div className="flex justify-between items-center flex-wrap px-4">
        <a href="#">
          <img src="Logo.png" alt="brandLogo" className="w-28 h-auto" />
        </a>

        <ul className="hidden lg:flex justify-center items-center gap-2 text-light flex-wrap">
          {navSource.map((item, index) => {
            return (
              <li
                key={index}
                className={`relative text-sm font-medium ${
                  activeNavItem === index ? 'font-extrabold text-dark' : '' 
                }`}
                onClick={() => handleNavItemClick(index)} 
              >
                <a
                  href={item.link}
                  className="hover:text-dark transition duration-300 ease-in-out"
                >
                  {item.title}
                </a>
                {activeNavItem === index && (
                  <span className="absolute top-12 bottom-0 left-0 right-0 h-[0.121rem] w-17 bg-dark"></span>
                )}
              </li>
            );
          })}
        </ul>
          
        <div className="flex items-center flex-wrap">
          <span className="relative flex justify-center items-center gap-2 bg-white p-2 rounded-full cursor-pointer">
            <img src="bellIcon.png" alt="notification icon" className="h-6 w-6" />
            <span className="absolute h-3 w-3 rounded-full bg-green-500 top-0 right-0"></span>
          </span>

          <div className="ml-4 flex items-center gap-2">
            <img src="profile.png" alt="profile" className="h-10 w-10 rounded-full" />
            <div className="text-light hidden sm:block">
              <h1 className="font-semibold text-base">Usman Zafar</h1>
              <p className="text-sm text-gray-500">usmanzafar@gmail.com</p>
            </div>
          </div>
          <button className="lg:hidden ml-4" onClick={handleMobileMenuClick}>
            <AlignJustify />
          </button>
        </div>
      </div>
      {showMobileMenu && (
        <ul className="lg:hidden flex flex-col gap-2 px-4 py-2 text-light">
          {navSource.map((item, index) => {
            return (
              <li
                key={index}
                className="text-sm font-medium"
              >
                <a
                  href={item.link}
                  className="hover:text-dark transition duration-300 ease-in-out"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
