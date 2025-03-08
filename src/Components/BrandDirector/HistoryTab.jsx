import React from 'react';
import { Clock, Users, FileText } from 'lucide-react';

const HistoryTab = () => {
  const versionHistory = [
    {
      version: "v3.2",
      date: "2024-03-15",
      author: "John Smith",
      changes: "Updated market share assumptions based on Q1 data",
      status: "Current"
    },
    {
      version: "v3.1",
      date: "2024-02-20",
      author: "Emma Johnson",
      changes: "Adjusted pricing strategy for 2025-2027",
      status: "Archived"
    },
    {
      version: "v3.0",
      date: "2024-01-10",
      author: "Michael Brown",
      changes: "Major revision of patient population estimates",
      status: "Archived"
    },
    {
      version: "v2.5",
      date: "2023-12-05",
      author: "Sarah Davis",
      changes: "Updated compliance rates based on new market research",
      status: "Archived"
    },
    {
      version: "v2.4",
      date: "2023-11-15",
      author: "John Smith",
      changes: "Adjusted treatment duration assumptions",
      status: "Archived"
    },
    {
      version: "v2.3",
      date: "2023-10-20",
      author: "Emma Johnson",
      changes: "Incorporated competitor launch impact",
      status: "Archived"
    }
  ];

  return (
    <div className=" flex flex-col gap-4">
        <div className='flex flex-col justify-start gap-1'>
            <span className='text-teal-600 text-[16px] font-[500]'>
            Version Control History
            </span>
        </div>
      
      <div className="overflow-auto rounded-lg border border-gray-200 max-h-72">
        <div className="grid grid-cols-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium p-3 sticky top-0">
          <div className="col-span-1 text-xs">Version</div>
          <div className="col-span-2 text-xs">Date</div>
          <div className="col-span-2 text-xs">Author</div>
          <div className="col-span-5 text-xs">Changes</div>
          <div className="col-span-2 text-xs">Status</div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {versionHistory.map((item, index) => (
            <div 
              key={item.version} 
              className={`grid grid-cols-12 p-3 hover:bg-gray-50 transition-colors ${
                item.status === "Current" ? "bg-teal-50" : ""
              }`}
            >
              <div className="col-span-1 font-medium text-teal-700 text-xs">{item.version}</div>
              <div className="col-span-2 text-gray-600 text-xs">{item.date}</div>
              <div className="col-span-2 text-gray-800 flex items-center text-xs">
                <Users className="mr-1 text-gray-400" size={12} />
                {item.author}
              </div>
              <div className="col-span-5 text-gray-700 flex items-center text-xs">
                <FileText className="mr-1 text-gray-400" size={12} />
                {item.changes}
              </div>
              <div className="col-span-2">
                {item.status === "Current" ? (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    Current
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    Archived
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">Showing 6 versions</span>
        <button className="px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors text-xs">
          Export History
        </button>
      </div>
    </div>
  );
};

export default HistoryTab;