import React from 'react';
import {ChevronDown} from 'lucide-react'

const ForecastParametersTab = () => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-auto">
      <div className='flex flex-col justify-start gap-1'>
        <span className='text-teal-600 text-[14px] font-[500]'>
          Forecast Parameters
        </span>
      </div>
      
      {/* Forecast Parameters Section */}
      <div className="border rounded-lg p-3">
        <h2 className="text-[15px] font-medium mb-3">Forecast Parameters</h2>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {/* Left Column */}
          <div>
            <div className="mb-3">
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                Forecast Horizon
              </label>
              <div className="relative">
                <select className="block w-full bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-8 text-[11px]">
                  <option>5 Years</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                Growth Rate Adjustment
              </label>
              <div className="relative flex items-center">
                <input type="text" className="block w-full bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-8 text-[11px]" defaultValue="15.2" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500 text-[11px]">%</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                Market Events
              </label>
              <div className="relative">
                <select className="block w-full bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-8 text-[11px]">
                  <option>None</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <div className="mb-3">
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                Forecast Granularity
              </label>
              <div className="relative">
                <select className="block w-full bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-8 text-[11px]">
                  <option>Quarterly</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                Confidence Interval
              </label>
              <div className="relative">
                <select className="block w-full bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-8 text-[11px]">
                  <option>95%</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-medium text-gray-700 mb-1">
                Seasonality
              </label>
              <div className="relative">
                <select className="block w-full bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-8 text-[11px]">
                  <option>None</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scenario Analysis Section */}
      <div className="border rounded-lg p-3">
        <h2 className="text-[15px] font-medium mb-3">Scenario Analysis</h2>
        
        <div className="grid grid-cols-3 gap-3">
          {/* Pessimistic Scenario */}
          <div className="border border-red-200 rounded-lg p-3">
            <div className="flex justify-between mb-1">
              <h3 className="text-[12px] font-medium">Pessimistic</h3>
            </div>
            <p className="text-[10px] text-gray-500 mb-1.5">Growth Rate: 10%</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px]">Enabled</span>
              <div className="relative inline-block w-8 align-middle select-none">
                <div className="w-8 h-4 bg-gray-200 rounded-full shadow-inner"></div>
                <div className="absolute right-0 bottom-[1.5px] w-4 h-4 bg-gray-300 rounded-full shadow transform translate-x-0"></div>
              </div>
            </div>
          </div>
          
          {/* Base Case Scenario */}
          <div className="border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between mb-1">
              <h3 className="text-[12px] font-medium">Base Case</h3>
            </div>
            <p className="text-[10px] text-gray-500 mb-1.5">Growth Rate: 15.2%</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px]">Enabled</span>
              <div className="relative inline-block w-8 align-middle select-none">
                <div className="w-8 h-4 bg-gray-200 rounded-full shadow-inner"></div>
                <div className="absolute right-[10px] bottom-[1.5px] w-4 h-4 bg-teal-500 rounded-full shadow transform translate-x-4"></div>
              </div>
            </div>
          </div>
          
          {/* Optimistic Scenario */}
          <div className="border border-green-200 rounded-lg p-3">
            <div className="flex justify-between mb-1">
              <h3 className="text-[12px] font-medium">Optimistic</h3>
            </div>
            <p className="text-[10px] text-gray-500 mb-1.5">Growth Rate: 20%</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px]">Enabled</span>
              <div className="relative inline-block w-8 align-middle select-none">
                <div className="w-8 h-4 bg-gray-200 rounded-full shadow-inner"></div>
                <div className="absolute right-0 bottom-[1.5px] w-4 h-4 bg-gray-300 rounded-full shadow transform translate-x-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastParametersTab;