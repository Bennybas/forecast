import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendBasedMainV2 = () => {
  const navigate = useNavigate();
  
  // Array of 20 products
  const products = Array.from({ length: 20 }, (_, i) => `Product-${i + 1}`);
  
  const handleProductSelect = (product) => {
    // Navigate to portfolio page with the selected product as a parameter
    navigate(`/portfolio-page?product=${encodeURIComponent(product)}`);
  };
  
  return (
    <div className="mt-20 px-8">
        <div className='flex items-center text-[12px]'>
            <span 
            className='text-gray-600 cursor-pointer font-medium'>History Data</span> &gt; 

        </div>
      <div className="rounded-2xl bg-white border w-full shadow-lg">
        <div className="h-10 bg-gray-200 rounded-t-2xl flex justify-center items-center">
          <span className="text-base font-medium text-gray-800 p-1">
            Forecast Creation
          </span>
        </div>
        
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Select a Product to Forecast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {products.map((product) => (
              <button
                key={product}
                onClick={() => handleProductSelect(product)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-[12px] py-3 px-4 rounded-lg border border-blue-200 transition-colors duration-200 flex items-center justify-center"
              >
                <span>{product}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendBasedMainV2;