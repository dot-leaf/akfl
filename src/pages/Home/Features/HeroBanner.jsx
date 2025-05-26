import React from 'react';
import { banner } from '../../../assets/images/image';

const HeroBanner = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <img
        src={banner}
        alt="Hero Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default HeroBanner;