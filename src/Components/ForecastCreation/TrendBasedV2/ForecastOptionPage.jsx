import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForecastOptionPage = () => {
  const navigate = useNavigate();
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showVariantDropdown, setShowVariantDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  // Sample data for the dropdowns
  const countries = ['Germany', 'Sweden', 'UK', 'Denmark'];
  const variants = ['10MG', '25 MG', '50MG'];

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const handleVariantSelection = (variant) => {
    setSelectedVariant(variant);
    setShowVariantDropdown(false);
  };

  const handleNext = () => {
    if (selectedCountry && selectedVariant) {
      navigate('/loadeddata-page', { 
        state: { country: selectedCountry, variant: selectedVariant } 
      });
    }
  };

  return (
    <div className="mt-20 px-8">
      <div className='flex items-center text-[12px]'>
            <span 
            onClick={() =>navigate('/trend-based')}
            className='text-gray-600 cursor-pointer '>History Data</span> &gt; 
            <span 
             onClick={() =>navigate('/portfolio-page')}
            className='text-gray-600 cursor-pointer '>Portfolio Forecasts</span>
            &gt; 
            <span 
            onClick={() =>navigate('/archieve-page')}
            className='text-gray-600 cursor-pointer '> Forecasts Archive</span>
            &gt; 
            <span className='font-medium'>Forecasts Creation</span>
        </div>
      <div className="rounded-2xl bg-white border w-full shadow-lg h-[28rem]">
        <div className="h-10 bg-gray-200 rounded-t-2xl flex justify-center items-center">
          <span className="text-base font-medium text-gray-800 p-1">
            Forecast creation
          </span>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-8">
            {/* Country Selection */}
            <div className="w-96">
              <h2 className="text-[14px] font-semibold mb-4">1. Select a Country</h2>
              <div className="relative">
                <div 
                  className="border rounded-md p-3 flex justify-between items-center cursor-pointer shadow-sm"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <span className="text-[14px] text-gray-500">
                    {selectedCountry || 'Select a Country'}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                
                {showCountryDropdown && (
                  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                    {countries.map((country, index) => (
                      <div 
                        key={index} 
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCountrySelection(country)}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Variant Selection */}
            <div className="w-96">
              <h2 className="text-[14px] font-semibold mb-4">2. Select a Variant</h2>
              <div className="relative">
                <div 
                  className="border rounded-md p-3 flex justify-between items-center cursor-pointer shadow-sm"
                  onClick={() => setShowVariantDropdown(!showVariantDropdown)}
                >
                  <span className="text-[14px] text-gray-500">
                    {selectedVariant || 'Select a Variant'}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                
                {showVariantDropdown && (
                  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                    {variants.map((variant, index) => (
                      <div 
                        key={index} 
                        className="p-3 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleVariantSelection(variant)}
                      >
                        {variant}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Next Button */}
            <div className="text-[14px] flex items-end">
              <button 
                className={`bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition ${(!selectedCountry || !selectedVariant) ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNext}
                disabled={!selectedCountry || !selectedVariant}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastOptionPage;