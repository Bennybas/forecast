import React from 'react'
import { useNavigate } from 'react-router-dom';
const ForecastArchieve = () => {

    const navigate = useNavigate();

  // Sample data based on the image
  const forecastData = [
    { code: 'FS-2024-480190', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2028', peak: '$9,00,00,000 || 2026' },
    { code: 'FS-2024-480191', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2028', peak: '$3,00,00,000 || 2026' },
    { code: 'FS-2024-480192', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2029', peak: '$4,00,00,000 || 2027' },
    { code: 'FS-2024-480193', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2027', peak: '$8,00,00,000 || 2028' },
    { code: 'FS-2023-480194', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2027', peak: '$3,00,00,000 || 2025' },
    { code: 'FS-2023-480195', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2027', peak: '$40,00,000 || 2026' },
    { code: 'FS-2023-480201', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2027', peak: '$8,00,00,000 || 2026' },
    { code: 'FS-2023-480202', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2026', peak: '$2,00,00,000 || 2025' },
    { code: 'FS-2022-480203', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2026', peak: '$3,00,00,000 || 2025' },
    { code: 'FS-2022-480204', name: 'Product 1 || Germany || 25 mg', submission: 'SDP / PFR', till: '2026', peak: '$2,00,00,000 || 2025' },
  ];

  const handleRowClick = () => {
    navigate('/table-page');
  };
  return (

    <div className='mt-[5rem] px-8'>

        <div className='flex items-center text-[12px]'>
            <span 
            onClick={() =>navigate('/trend-based')}
            className='text-gray-600 cursor-pointer '>History Data</span> &gt; 
            <span 
             onClick={() =>navigate('/portfolio-page')}
            className='text-gray-600 cursor-pointer '>Portfolio Forecasts</span>
            &gt; 
            <span className='font-medium'> Forecasts Archive</span>
        </div>

    
    <div className=' rounded-2xl bg-white border w-full shadow-lg'>
        <div className='h-10 bg-gray-200 rounded-t-2xl flex justify-center items-center'>
            <span className='text-[16px] font-[500] text-gray-800 p-1'>
                Forecast Creation
            </span>

        </div>

        <div className='px-8 py-4'>
          <div className='mb-4'>
            <h1 className='text-lg font-semibold'>Forecast Archive</h1>
          </div>
          
          <div className='mb-3'>
            <h2 className='text-base font-medium'>Forecasts and Actuals (10+)</h2>
            <p className='text-xs text-gray-600'>10+ items · Sorted by Portfolio · Updated 2 minutes ago</p>
          </div>
          
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-teal-600 text-white'>
                  <th className='p-2 text-left w-10 border-r border-gray-300'>
                    <input type='checkbox' className='form-checkbox h-4 w-4' />
                  </th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Forecast code</th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Forecast name</th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Submission</th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Forecast Till</th>
                  <th className='p-2 text-left text-xs'>Peak sales || Year</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((item, index) => (
                  <tr 
                    key={item.code} 
                    className='hover:bg-gray-100 cursor-pointer border-b border-gray-200'
                    onClick={() => handleRowClick()}
                  >
                    <td className='p-2 border-r border-gray-200'>
                      <input type='checkbox' className='form-checkbox h-3 w-3' />
                    </td>
                    <td className='p-2 text-xs text-gray-600 border-r border-gray-200'>
                      <button 
                        className='text-blue-500 hover:underline'
                        onClick={() => handleRowClick()}
                      >
                        {item.code}
                      </button>
                    </td>
                    <td className='p-2 text-xs text-gray-600 border-r border-gray-200'>{item.name}</td>
                    <td className='p-2 text-xs text-gray-600 border-r border-gray-200'>{item.submission}</td>
                    <td className='p-2 text-xs text-gray-600 border-r border-gray-200'>{item.till}</td>
                    <td className='p-2 text-xs text-gray-600'>{item.peak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div 
          onClick={()=> navigate('/options-page')}
          className='flex justify-end mt-4'>
            <button className='bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition'>
              Create Forecast
            </button>
          </div>
        </div>

    </div>
    </div>
  )
}

export default ForecastArchieve