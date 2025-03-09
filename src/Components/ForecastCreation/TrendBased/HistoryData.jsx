import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HistoryData = () => {
  const tableData = [
    { year: '2019', sales: '$12,500', volume: '5,200', patients: '2,600' },
    { year: '2020', sales: '$14,200', volume: '5,800', patients: '2,900' },
    { year: '2021', sales: '$16,800', volume: '6,700', patients: '3,350' },
    { year: '2022', sales: '$19,500', volume: '7,600', patients: '3,800' },
    { year: '2023', sales: '$22,000', volume: '8,400', patients: '4,200' }
  ];

  const dataSources = ['Internal Database', 'External Reports', 'Market Analysis'];
  const timePeriods = ['Last 5 Years', 'Last 10 Years', 'Custom Range'];

  const [selectedSource, setSelectedSource] = useState(dataSources[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(timePeriods[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className='flex flex-col justify-start gap-1'>
        <span className='text-teal-600 text-sm font-medium'>
          Historical Data Import
        </span>
      </div>

      {/* Import Controls */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Data Source</label>
          <select
            className="border rounded-xl px-3 py-1.5 w-48 text-xs"
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            {dataSources.map((source, index) => (
              <option key={index} value={source} >{source}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-xs text-gray-600 mb-1">Time Period</label>
          <select
            className="border rounded-xl px-3 py-1.5 w-48 text-xs"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {timePeriods.map((period, index) => (
              <option key={index} value={period}>{period}</option>
            ))}
          </select>
        </div>
        
        <button className="bg-teal-600 text-white rounded-xl px-4 py-1.5 text-xs font-medium mt-4">
          Import Data
        </button>
      </div>

      {/* Data Table */}
      <div className="mt-2 border rounded-sm overflow-hidden">
        <table className="w-full text-xs rounded-lg">
          <thead className="bg-teal-600">
            <tr>
              <th className="text-left py-2 px-4 text-white font-medium">YEAR</th>
              <th className="text-left py-2 px-4 text-white font-medium">SALES ($000S)</th>
              <th className="text-left py-2 px-4 text-white font-medium">VOLUME (UNITS)</th>
              <th className="text-left py-2 px-4 text-white font-medium">PATIENTS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-2 px-4 border-t">{row.year}</td>
                <td className="py-2 px-4 border-t">{row.sales}</td>
                <td className="py-2 px-4 border-t">{row.volume}</td>
                <td className="py-2 px-4 border-t">{row.patients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryData;
