import React, { useState } from 'react';
import Button from '../components/Button';
import { navLinks } from '../utils/data';
import { logo } from '../assets/icons/icon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <div className='sticky top-0'>

    <nav className="bg-white shadow-md py-4  px-6 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-48" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex space-x-6 items-center">
        {navLinks.map((link, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center Montserrat space-x-1 text-black text-[0.9rem] font-semibold hover:text-[#0254a4] cursor-pointer">
              <span>{link.name}</span>
              {link.sublinks.length > 0 && (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
            {link.sublinks.length > 0 && (
              <div className="Montserrat absolute left-0 mt-2 w-62 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-95 transition-all duration-300 ease-in-out z-20">
                {link.sublinks.map((sublink, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 text-[0.9rem] text-black font-medium hover:bg-blue-100 hover:text-[#0254a4]"
                  >
                    {sublink}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Button buttonContent="DONATE NOW" />
        <Button buttonContent="APPOINTMENT" />
      </div>

      {/* Mobile & Tablet Hamburger & Cross Icon */}
      <div className="md:block lg:hidden z-50">
         <button onClick={() => setIsOpen(!isOpen)} className="text-white rounded-lg bluebg p-2 focus:outline-none">
         {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => handleToggleDropdown(index)}
                className="Montserrat flex items-center justify-between text-black text-[0.9rem] font-semibold hover:text-[#0254a4] w-full"
              >
                <span>{link.name}</span>
                {link.sublinks.length > 0 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Sublinks - only show if openDropdownIndex === index */}
              {link.sublinks.length > 0 && openDropdownIndex === index && (
                <div className="Montserrat mt-2 ml-4 space-y-2 pl-2 border-l-2 border-blue-200 transition-opacity duration-300">
                  {link.sublinks.map((sublink, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block text-[0.86rem] text-black font-medium hover:bg-blue-50 hover:text-[#0254a4] px-2 py-1 rounded"
                    >
                      {sublink}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile & Tablet Buttons */}
          <div className="flex flex-col space-y-2 pt-4">
            <Button buttonContent="DONATE NOW" />
            <Button buttonContent="APPOINTMENT" />
          </div>
        </div>
      </div>
    </nav>
    </div>
              </>
  );
};

export default Navbar;