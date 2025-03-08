import React from 'react';
import { FaUsersGear } from "react-icons/fa6";
import { PiNetworkLight } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { FaFolderClosed } from "react-icons/fa6";
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoTelescope,IoLaptop } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ForecastCreation = () => {
    const navigate =useNavigate();
  return (
    <div className="mt-16 overflow-y-hidden">
      <div className="flex justify-center items-center p-6">
        <div className="relative flex w-full h-[30rem] bg-white rounded-lg shadow-lg border">
          
          {/* Left Section */}
          
          <div className="relative flex w-1/2 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" className="absolute top-14 left-0 w-full h-auto">
              <path d="M0,0 L700,0 L800,100 L700,200 L0,200 Z" fill="#32b3b3" />
            </svg>

            

            {/* Overlaying Text & Design */}
            <div className="absolute -top-4 left-10 w-[30rem]">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">
                    <line x1="200" y1="150" x2="800" y2="150" stroke="white" strokeWidth="3" />
                    <circle cx="300" cy="150" r="6" fill="white" />
                    <circle cx="490" cy="150" r="6" fill="white" />
                    <circle cx="680" cy="150" r="6" fill="white" />

                    <polygon points="800,150 780,140 780,160" fill="white" />


                </svg>
                <div className="flex w-full gap-2">
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex justify-center items-center rounded-full bg-white w-12 h-12 ml-4 mt-4">
                            <FaUsersGear className="text-[#32b3b3] w-8 h-8"/>
                            
                        </div>
                        <div>
                            <span className="text-white text-md font-[500]">
                                Patient Based
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div 
                        onClick={() => navigate('/forecast-algorithm')}
                        className="flex flex-col justify-center items-center rounded-lg bg-[#154a4a] w-24 h-20 ml-4 p-1 cursor-pointer">
                            <PiNetworkLight className="text-white w-8 h-8" />
                            <span className="text-white text-[8px] text-center w-full">
                            Design Forecast Algorithm
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex flex-col justify-center items-center rounded-lg bg-[#f0f5f5] w-24 h-20 ml-4 p-1">
                            <FaDatabase className="text-[#154a4a]  w-8 h-8" />
                            <span className="text-[#154a4a]  text-[8px] text-center w-full">
                            Define Data Sources
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex flex-col justify-center items-center rounded-lg bg-[#f0f5f5] w-24 h-20 ml-4 p-1">
                            <RiUserStarLine className="text-[#154a4a]  w-8 h-8" />
                            <span className="text-[#154a4a]  text-[8px] text-center w-full">
                            Design Patient Based Model
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" className="absolute bottom-14 left-0 w-full h-auto">
              <path d="M0,0 L700,0 L800,100 L700,200 L0,200 Z" fill="#fabd8c" />
            </svg>


            <div className="absolute bottom-16 left-10 w-[30rem]">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">
                    <line x1="200" y1="150" x2="800" y2="150" stroke="white" strokeWidth="3" />
                    <circle cx="300" cy="150" r="6" fill="white" />
                    <circle cx="490" cy="150" r="6" fill="white" />
                    <circle cx="680" cy="150" r="6" fill="white" />

                    <polygon points="800,150 780,140 780,160" fill="white" />


                </svg>
                <div className="flex w-full gap-3">
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex justify-center items-center rounded-full bg-white w-12 h-12 ml-4 mt-4">
                            <LuChartNoAxesCombined className="text-[#eb7c21] w-8 h-8"/>
                            
                        </div>
                        <div>
                            <span className="text-white text-md font-[500]">
                                Trend Based
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex flex-col justify-center items-center rounded-lg bg-[#eb7c21] w-24 h-20 ml-4 p-1">
                            <MdOutlineHistoryToggleOff className="text-white w-8 h-8" />
                            <span className="text-white text-[8px] text-center w-full">
                            Historical Data
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex flex-col justify-center items-center rounded-lg bg-[#f0f5f5] w-24 h-20 ml-4 p-1">
                            <MdEventAvailable className="text-[#eb7c21]  w-8 h-8" />
                            <span className="text-[#154a4a]  text-[8px] text-center w-full">
                            Additional Events
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center'>
                        <div className="flex flex-col justify-center items-center rounded-lg bg-[#f0f5f5] w-24 h-20 ml-4 p-1">
                            <IoMdTrendingUp className="text-[#eb7c21]  w-8 h-8" />
                            <span className="text-[#154a4a]  text-[8px] text-center w-full">
                            Trend Based Model
                            </span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Section */}
          
            <div className="w-[30%] h-full p-4">
                <div className="flex w-full h-full">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex w-full h-[70%] rounded-2xl bg-[#6d8c62]/70 p-4 justify-center items-center gap-4">
                            <div className='flex flex-col justify-center items-center bg-[#f0f5f5] w-5/12 h-[14rem] rounded-lg gap-4'>
                                <FaFolderClosed className='w-10 h-10 text-[#255214]'/>
                                <span className='text-[#255214] text-center text-[14px] font-[500]'>
                                    Master Data
                                </span>
                            </div>
                            <div 
                           
                            className='flex flex-col justify-center items-center bg-[#f0f5f5] w-5/12 h-[14rem] rounded-lg gap-4'>
                                <BsGrid1X2Fill className='w-10 h-10 text-[#255214]'/>
                                <span className='text-[#255214] text-center text-[14px] font-[500]'>
                                    DashBoard/ KeyInsights
                                </span>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>

            <div className="w-[20%] h-full pl-4">
            <div className="flex w-full h-full">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex flex-col w-full h-[65%] rounded-l-2xl bg-[#6d8c62]/70 p-4 justify-center items-center gap-4">
                            <div className='flex flex-col justify-center items-center bg-[#f0f5f5] w-[10rem] h-[7rem] rounded-lg gap-4'>
                                <IoTelescope className='w-10 h-10 text-[#255214]'/>
                                <span className='text-[#255214] text-center text-[14px] font-[500]'>
                                   Scenario Planner
                                </span>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-[#f0f5f5] w-[10rem] h-[7rem] rounded-lg gap-4'>
                                <IoLaptop className='w-10 h-10 text-[#255214]'/>
                                <span className='text-[#255214] text-center text-[14px] font-[500]'>
                                    Simulator For Range Forecast
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default ForecastCreation;
