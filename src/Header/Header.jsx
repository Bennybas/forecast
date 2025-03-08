import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <header className="bg-[#cbf7f7]/70 text-gray-600 flex items-center justify-between px-6 py-3 border-b border-gray-300">
        {/* Logo Section */}
        <img
        onClick={() => navigate('/')}
          src="/chryselys.png"
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
         
        />
        <div className="flex flex-col">
          <span className="text-[24px] font-[700] text-[#207373]">
            ChryoCast - 
            <span className="text-[20px] font-[400] px-2 text-[#207373]/80">
              Easy Forecasting
            </span>
          </span>

          <span className="text-[9px] px-2 text-[#207373]/80 tracking-[0.25em]">
            P O W E R E D &nbsp; B Y &nbsp; G E N &nbsp; A I &nbsp; ( 
              <span className='text-[#c98b27] font-[500]'>A I </span>V Y )
          </span>
        </div>

      

        {/* Right Side Section with User Info */}
        <div className="flex items-center space-x-4">
          <div className='flex items-center'>
            <span className="text-md font-light">Hello,</span>
            <span className="text-md font-medium ml-1">User</span>
          </div>

          <button className="p-1 bg-gray-200 rounded-full">
            <FcBusinessman  className="text-3xl" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
