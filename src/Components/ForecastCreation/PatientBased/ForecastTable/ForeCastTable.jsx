import React, { useState } from 'react';
import TableData from './TableData';

const ForeCastTable = () => {

    // Filter options state
      const [filters, setFilters] = useState({
        forecastCycle: "Mid-Term Planning",
        country: "USA",
        indication: "Immunology Indication 1",
        product: "Product 1",
        timeHorizon: "3 years",
        startYear: "2024"
      });
    
      // Render a filter dropdown
      const renderFilter = (label, value, options = []) => (
        <div className='flex flex-col'>
          <span className='text-[14px] font-[500] pl-2'>{label}</span>
          <select className='border rounded-md p-2 text-[12px] font-[400] w-full cursor-pointer'>
            <option>{value}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
  return (
    <div className="mt-[4.5rem] p-6 bg-gray-100">
    <div className='bg-white shadow-md w-full h-full rounded-lg border'>
      {/* Top Filter Section */}
      <div className='grid grid-cols-6 gap-4 p-4 border-b'>
        {renderFilter('Forecast Cycle', filters.forecastCycle)}
        {renderFilter('Country', filters.country)}
        {renderFilter('Indication', filters.indication)}
        {renderFilter('Product', filters.product)}
        {renderFilter('Time Horizon', filters.timeHorizon)}
        {renderFilter('Start Year', filters.startYear)}
      </div>
      
      {/* Navigation breadcrumb */}
      <div className='p-4 border-b text-sm'>
          <div className='flex justify-between items-center w-full'>
              {/* Left Side - Breadcrumb */}
              <div className='flex items-center'>
                  <span className='text-gray-600'>Forecast Creation</span> &gt; 
                  <span className='text-gray-600'>Define Forecast Flow</span>
                  &gt; 
                  <span className='font-medium'>Patient Based Model</span>
              </div>

              {/* Right Side - Buttons */}
              <div className='flex gap-2'>
                  <div className='flex border border-teal-600 h-6 w-28 rounded-lg justify-center items-center cursor-pointer'>
                      <span className="font-medium text-teal-600">Export Excel</span>
                  </div>
                  <div 
                  
                  className='flex bg-teal-600 h-6 w-28 rounded-lg justify-center items-center cursor-pointer'>
                      <span className=' font-medium text-white'>Save Version</span>
                  </div>
              </div>
          </div>
      </div>

      
      <div className='py-4'>
        <TableData />
      </div>


    </div>
  </div>
  )
}

export default ForeCastTable