import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  classSpanName?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  classSpanName = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm rounded-full text-white hover:text-gray-400 transition-all duration-300 ease-in-out group ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-red-500 opacity-100 duration-300"></span>
      <span className={`absolute inset-[2px] rounded-full ${classSpanName}`}></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GradientButton;