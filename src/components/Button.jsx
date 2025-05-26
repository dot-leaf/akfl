import React from 'react';

const Button = ({ buttonContent }) => {
  return (
    <button className="Montserrat bg-[#0254a4] cursor-pointer text-white font-medium py-2 px-4 rounded-xs text-[0.8rem]  transition duration-300">
      {buttonContent}
    </button>
  );
};

export default Button;