import React from 'react';
import Vector from '../assets/images/vector1.png';

const TextInfo = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row gap-2 text-center">
            <img src={Vector} alt='Vector line' />
            <h1 className="text-[#8BC34A] font-[700] text-[20px]">WHAT WE DO</h1>
        </div>
      </div>
    </div>
  );
};

export default TextInfo
