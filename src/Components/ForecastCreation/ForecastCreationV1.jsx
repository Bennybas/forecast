import React from 'react'
import { Users, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const ForecastCreationV1 = () => {
    const navigate =useNavigate();
  return (
    <div className="mt-16 overflow-y-hidden">
      <div className="flex justify-center items-center p-6">
        <div className="relative flex flex-col w-full h-[30rem] bg-white rounded-lg shadow-lg border p-3">
          {/* Header section with selection details */}
          <div className="border-b pb-2">
            <h1 className="text-lg font-bold text-gray-800">Define Forecast Flow</h1>
            <p className="text-xs text-gray-600">
              Immunology Indication 1 - Mid Term Planning - United States of America - 3 Years - Product 1 - 2024
            </p>
          </div>

          {/* Forecast Type Selection */}
          <div className="mt-4">
            <h2 className="text-base font-bold text-gray-800 mb-3">Select Forecast Type</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Patient-Based Forecast Card */}
              <div 
              onClick={() => navigate('/forecast-algorithm')}
              className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-xl">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-2 text-white flex items-center">
                  <Users className="mr-1" size={16} />
                  <h3 className="text-sm font-medium">Patient-Based Forecast</h3>
                </div>
                
                {/* Card Content */}
                <div className="p-2">
                  <p className="text-xs text-gray-700 mb-2">
                    Create a forecast based on patient population and treatment patterns. This approach uses a bottom-up 
                    methodology to build forecasts from epidemiology data.
                  </p>
                  
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1 mr-1.5"></div>
                      <span className="text-xs text-gray-700">Ideal for new products or indications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1 mr-1.5"></div>
                      <span className="text-xs text-gray-700">Detailed patient flow modeling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1 mr-1.5"></div>
                      <span className="text-xs text-gray-700">Supports complex market dynamics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Trend-Based Forecast Card */}
              <div 
              onClick={() => navigate('/trend-based')}
              className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-xl">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 text-white flex items-center">
                  <TrendingUp className="mr-1" size={16} />
                  <h3 className="text-sm font-medium">Trend-Based Forecast</h3>
                </div>
                
                {/* Card Content */}
                <div className="p-2">
                  <p className="text-xs text-gray-700 mb-2">
                    Create a forecast based on historical trends and market projections. This approach uses statistical 
                    methods to project future performance.
                  </p>
                  
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1 mr-1.5"></div>
                      <span className="text-xs text-gray-700">Ideal for established products</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1 mr-1.5"></div>
                      <span className="text-xs text-gray-700">Multiple statistical models</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1 mr-1.5"></div>
                      <span className="text-xs text-gray-700">Scenario-based analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForecastCreationV1