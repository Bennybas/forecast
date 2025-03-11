import React from 'react'
import PortfolioForecastPage from './PortfolioForecast'



const TrendBasedMainV2 = () => {
  return (
    <div className='mt-[5rem] px-8'>

    
    <div className=' rounded-2xl bg-white border w-full shadow-lg'>
        <div className='h-10 bg-gray-200 rounded-t-2xl flex justify-center items-center'>
            <span className='text-[16px] font-[500] text-gray-800 p-1'>
                Forecast Creation
            </span>

        </div>

        <PortfolioForecastPage />
        
    </div>
    </div>
  )
}

export default TrendBasedMainV2