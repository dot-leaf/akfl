import React from 'react';
import { contactInfo, socialIcons } from '../utils/data';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className='hidden md:block sticky top-0'>
        <header className="bg-[#0254a4] text-white px-4 py-3 flex justify-between items-center flex-wrap">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 flex-wrap">
            <div className="flex items-center space-x-2">
              <span className="text-md"><FaPhoneAlt color='white'/></span>
              <span className="hidden md:inline Montserrat text-[0.9rem] font-medium">{contactInfo.phone1} / {contactInfo.phone2}</span>
              <span className="md:hidden">{contactInfo.phone1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl"><IoMailUnreadSharp className='text-white'/></span>
              <span className="hidden md:inline Montserrat text-[0.9rem] font-medium">{contactInfo.email}</span>
              <span className="md:hidden">{contactInfo.email.slice(0, 7) + '...'}</span>
            </div>
          </div>

       
          {/* Social Media Icons - Moved to the right */}
          <div className="flex items-center space-x-4">
            {socialIcons.map(({ Icon, href, className }, index) => (
              <a key={index} href={href} className="hover:text-gray-300">
                <span><Icon className={className} /></span>
              </a>
            ))}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;