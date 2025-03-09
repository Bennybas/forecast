import React from 'react'

const ForecastPreviewTab = () => {
    const Forecast_Preview = [
        { year: 2024, sales: "$25,300", volume: 9_500, patients: 4_750 },
        { year: 2025, sales: "$29,100", volume: 10_700, patients: 5_350 },
        { year: 2026, sales: "$33,500", volume: 12_100, patients: 6_050 },
        { year: 2027, sales: "$38,600", volume: 13_600, patients: 6_800 },
        { year: 2028, sales: "$44,500", volume: 15_300, patients: 7_650 }
    ];
    

  return (
    <div className="flex flex-col gap-4">
            <div className='flex flex-col justify-start gap-1'>
                <span className='text-teal-600 text-[16px] font-[500]'>
                 Forecast Preview
                </span>
            </div>
            
            <div className="overflow-auto rounded-lg border border-gray-200 max-h-72">
                <div className="grid grid-cols-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium p-3 sticky top-0">
                    <div className="col-span-2 text-xs">Year</div>
                    <div className="col-span-3 text-xs">Sales</div>
                    <div className="col-span-3 text-xs">Volume</div>
                    <div className="col-span-4 text-xs">Patients</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                    {Forecast_Preview.map((item) => (
                        <div 
                            key={item.version} 
                            className="grid grid-cols-12 p-3 hover:bg-gray-50 transition-colors"
                        >
                            <div className="col-span-2 font-medium text-teal-700 text-xs">{item.year}</div>
                            <div className="col-span-3 text-gray-600 text-xs">{item.sales}</div>
                            <div className="col-span-3 text-gray-800 text-xs">{item.volume}</div>
                            <div className="col-span-4 text-gray-700 text-xs">{item.patients}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ForecastPreviewTab