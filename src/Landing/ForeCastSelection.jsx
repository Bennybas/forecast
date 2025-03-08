import React from 'react'
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ForeCastSelection = () => {

  const navigate = useNavigate();
  return (
    <div className="px-16 h-screen flex justify-center items-center gap-6">
    <div 
    onClick={() => navigate('/forcast-creation')}
    className="flex w-[33.3%] bg-gradient-to-br from-[#0cabab] to-[#207373] h-[7rem] rounded-lg justify-start items-center p-4 gap-4 relative cursor-pointer">
      <HiOutlinePresentationChartBar className="w-10 h-10 text-white z-10" />
      <div className="relative z-10">
        <span className="text-[24px] font-[600] text-white">
          Forecast Creation
        </span>
      </div>
      <HiOutlinePresentationChartBar 
        className="w-20 h-20 text-black absolute right-4 opacity-30"
        style={{ zIndex: 0 }}
      />
    </div>

    <div className="flex w-[33.3%] bg-gradient-to-br from-[#0cabab] to-[#207373] h-[7rem] rounded-lg justify-start items-center p-4 gap-4 relative">
      <FaChartLine className="w-10 h-10 text-white z-10" />
      <div className="relative z-10">
        <span className="text-[24px] font-[600] text-white">
        Forecast Lead

        </span>
      </div>
      <FaChartLine 
        className="w-20 h-20 text-black absolute right-4 opacity-30"
        style={{ zIndex: 0 }}
      />
    </div>
    <div 
    onClick={() => navigate('/brand-main')}
    className="flex w-[33.3%] bg-gradient-to-br from-[#0cabab] to-[#207373] h-[7rem] rounded-lg justify-start items-center p-4 gap-4 relative cursor-pointer">
      <FaUsers className="w-10 h-10 text-white z-10" />
      <div className="relative z-10">
        <span className="text-[24px] font-[600] text-white">
         Brand Director
        </span>
      </div>
      <FaUsers 
        className="w-20 h-20 text-black absolute right-4 opacity-30"
        style={{ zIndex: 0 }}
      />
    </div>
  </div>
  
  )
}

export default ForeCastSelection