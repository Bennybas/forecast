import React from 'react';

const TrendAnalysisTab = () => {
    const versionHistory = [
        {
          version: "Sales CAGR",
          date: "15.2%",
          author: "High",
          changes: "Adjust"
        },
        {
          version: "Volume CAGR",
          date: "12.7%",
          author: "High",
          changes: "Adjust"
        },
        {
          version: "Patient Growth Rate",
          date: "12.7%",
          author: "Medium",
          changes: "Adjust"
        },
        {
          version: "Price Increase",
          date: "2.3%",
          author: "High",
          changes: "Adjust"
        },
        {
          version: "Market Share Growth",
          date: "3.5%",
          author: "Medium",
          changes: "Adjust"
        }
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className='flex flex-col justify-start gap-1'>
                <span className='text-teal-600 text-[16px] font-[500]'>
                    Trend Analysis
                </span>
            </div>
            
            <div className="overflow-auto rounded-lg border border-gray-200 max-h-72">
                <div className="grid grid-cols-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium p-3 sticky top-0">
                    <div className="col-span-2 text-xs">Metric</div>
                    <div className="col-span-3 text-xs">Value</div>
                    <div className="col-span-3 text-xs">Confidence</div>
                    <div className="col-span-4 text-xs">Action</div>
                </div>
                
                <div className="divide-y divide-gray-200">
                    {versionHistory.map((item) => (
                        <div 
                            key={item.version} 
                            className="grid grid-cols-12 p-3 hover:bg-gray-50 transition-colors"
                        >
                            <div className="col-span-2 font-medium text-teal-700 text-xs">{item.version}</div>
                            <div className="col-span-3 text-gray-600 text-xs">{item.date}</div>
                            <div className="col-span-3 text-gray-800 text-xs">{item.author}</div>
                            <div className="col-span-4 text-gray-700 text-xs">{item.changes}</div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500">Showing 5 metrics</span>
                <button className="px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors text-xs">
                    Export Data
                </button>
            </div>
        </div>
    );
};

export default TrendAnalysisTab;