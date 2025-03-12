import React from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioForecastPage = () => {
  const navigate = useNavigate();

  // Sample data based on the image
  const portfolioData = [
    { franchise: 'Immunology', product: 'Product 1', strength: '10 mg', region: 'Germany || Region Europe' },
    { franchise: 'Immunology', product: 'Product 1', strength: '25 mg', region: 'Germany || Region Europe' },
    { franchise: 'Immunology', product: 'Product 1', strength: '50 mg', region: 'Germany || Region Europe' },
    { franchise: 'Immunology', product: 'Product 1', strength: '10 mg', region: 'Germany || Region Europe' },
    { franchise: 'Immunology', product: 'Product 1', strength: '25 mg', region: 'Spain || Region Europe' },
    { franchise: 'Immunology', product: 'Product 1', strength: '50 mg', region: 'Spain || Region Europe' },
    { franchise: 'Oncology', product: 'Product 2', strength: '10 mg', region: 'France || Region Europe' },
    { franchise: 'Oncology', product: 'Product 3', strength: '20 mg', region: 'France || Region Europe' },
    { franchise: 'Neurology', product: 'Product 4', strength: 'Vail', region: 'UK || Region Europe' },
    { franchise: 'Cardio Vascular', product: 'Product 5', strength: 'Injection', region: 'Italy || Region Europe' },
  ];

  const handleFranchiseClick = () => {
    navigate('/archieve-page');
  };

  return (
    <div className='mt-[5rem] px-8'>
        <div className='flex items-center text-[12px]'>
            <span 
            onClick={() =>navigate('/trend-based')}
            className='text-gray-600 cursor-pointer '>History Data</span> &gt; 
            <span className='font-medium'>Portfolio Forecasts</span>
        </div>
    
    <div className=' rounded-2xl bg-white border w-full shadow-lg'>
        <div className='h-10 bg-gray-200 rounded-t-2xl flex justify-center items-center'>
            <span className='text-[16px] font-[500] text-gray-800 p-1'>
                Forecast Creation
            </span>

        </div>
   
        <div className='p-4'>
          <div className='mb-4'>
            <h1 className='text-lg font-semibold'>Portfolio Forecasts</h1>
          </div>
          
          <div className='mb-3'>
            
            <p className='text-xs text-gray-600'>10+ items</p>
          </div>
          
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse rounded-lg overflow-hidden'>
              <thead>
                <tr className='bg-teal-600 text-white'>
                  <th className='p-2 text-left w-10 border-r border-gray-300'>
                    <input type='checkbox' className='form-checkbox h-4 w-4' />
                  </th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Franchise</th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Product</th>
                  <th className='p-2 text-left text-xs border-r border-gray-300'>Strength</th>
                  <th className='p-2 text-left text-xs'>Country || Region</th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr 
                    key={index} 
                    className='hover:bg-gray-100 border-b border-gray-200'
                  >
                    <td className='p-2 border-r border-gray-200'>
                      <input type='checkbox' className='form-checkbox h-3 w-3' />
                    </td>
                    <td className='p-2 text-xs text-blue-500 border-r border-gray-200'>
                      <button 
                        className='hover:underline'
                        onClick={handleFranchiseClick}
                      >
                        {item.franchise}
                      </button>
                    </td>
                    <td className='p-2 text-xs text-gray-600 border-r border-gray-200'>{item.product}</td>
                    <td className='p-2 text-xs text-gray-600 border-r border-gray-200'>{item.strength}</td>
                    <td className='p-2 text-xs text-gray-600'>{item.region}</td>
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

  );
};

export default PortfolioForecastPage;