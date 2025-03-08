import React, { useState } from 'react';

const AnalysisTab = () => {
  const [viewType, setViewType] = useState('evolution');

  // Data for Key Assumption Evolution
  const evolutionData = {
    assumptions: [
      { name: 'Launch Date', 2020: 'Jan-28', 2021: 'Jan-28 →', 2022: 'Jan-28 →', 2023: 'Jan-28 →', 2024: 'Jan-28 →' },
      { name: 'US Incidence Cases', 2020: '3,30,000', 2021: '3,79,500 ↑', 2022: '3,22,000 ↓', 2023: '3,79,500 ↑', 2024: '3,89,500 ↑' },
      { name: 'Bolus Patients', 2020: '22,000', 2021: '22,000 →', 2022: '20,000 ↓', 2023: '22,000 ↑', 2024: '35,000 ↑' },
      { name: 'Market Share estimates (DMARD)', 2020: '50%', 2021: '55% ↑', 2022: '50% ↓', 2023: '60% ↑', 2024: '70% ↑' },
      { name: 'Market Access', 2020: '90%', 2021: '100% ↑', 2022: '80% ↓', 2023: '90% ↑', 2024: '80% ↓' },
      { name: 'Mean DoT (months)', 2020: '5', 2021: '6 ↑', 2022: '8 ↑', 2023: '6 ↓', 2024: '8 ↑' },
      { name: 'Adherence Rate', 2020: '70%', 2021: '80% ↑', 2022: '70% ↓', 2023: '80% ↑', 2024: '90% ↑' },
    ],
    years: ['FC 2020', 'FC 2021', 'FC 2022', 'FC 2023', 'FC 2024']
  };

  // Data for Assumption Comparison Analysis
  const comparisonData = {
    assumptions: [
      { name: 'Launch Date', downside: 'Jan-28', baseCase: 'Jul-28', upside: 'Jul-28' },
      { name: 'US Incidence Cases', downside: '3,30,000', baseCase: '3,79,500', upside: '3,79,500' },
      { name: 'Bolus Patients', downside: '22,000', baseCase: '20,000', upside: '25,000' },
      { name: 'Market Share estimates (DMARD)', downside: '60%', baseCase: '55%', upside: '60%' },
      { name: 'Market Access', downside: '90%', baseCase: '100%', upside: '80%' },
      { name: 'Mean DoT (months)', downside: '6', baseCase: '5.4', upside: '7' },
      { name: 'Adherence Rate', downside: '70%', baseCase: '90%', upside: '80%' },
    ],
    scenarios: ['Downside', 'Base Case', 'Upside']
  };

  const getValueColor = (value) => {
    if (value.includes('↑')) return 'text-green-500';
    if (value.includes('↓')) return 'text-red-500';
    return '';
  };

  const renderEvolutionView = () => (
    <div className="overflow-y-auto overflow-x-auto max-h-[18rem] shadow-sm rounded-lg bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="sticky top-0 bg-white z-10">
          <tr>
            <th className="px-6 py-4 text-left text-[12px] font-medium text-gray-600 w-1/6 bg-white">Assumptions</th>
            {evolutionData.years.map((year, index) => (
              <th key={index} className="px-6 py-4 text-left text-[12px] font-medium text-gray-600 bg-white">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {evolutionData.assumptions.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-[10px] font-medium text-gray-800">{row.name}</td>
              {evolutionData.years.map((year, yearIndex) => {
                const yearKey = year.split(' ')[1];
                const value = row[yearKey];
                return (
                  <td 
                    key={yearIndex} 
                    className={`px-6 py-4 text-[10px] ${getValueColor(value)}`}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderComparisonView = () => (
    <div className="overflow-y-auto overflow-x-auto max-h-[18rem] shadow-sm rounded-lg bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="sticky top-0 bg-white z-10">
          <tr>
            <th className="px-6 py-4 text-left text-[12px] font-medium text-gray-600 w-1/4 bg-white">Key Assumptions</th>
            {comparisonData.scenarios.map((scenario, index) => (
              <th key={index} className="px-6 py-4 text-left text-[12px] font-medium text-gray-600 bg-white">
                {scenario}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {comparisonData.assumptions.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-[10px] font-medium text-gray-800">{row.name}</td>
              {comparisonData.scenarios.map((scenario, scenarioIndex) => {
                // Fixed this line to correctly map scenario names to object properties
                const scenarioKey = scenario === 'Base Case' ? 'baseCase' : scenario.toLowerCase();
                return (
                  <td key={scenarioIndex} className="px-6 py-4 text-[10px]">
                    {row[scenarioKey]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='flex flex-col gap-4 h-full'>
      <div className='flex flex-col justify-start gap-1'>
        <span className='text-teal-600 text-[16px] font-[500]'>
          Assumption Analysis
        </span>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-2 flex gap-1">
        <button
          className={`px-4 py-2 rounded-md text-[12px] font-medium transition-all duration-200 ${
            viewType === 'evolution' 
            ? 'bg-white text-gray-800 shadow-sm' 
            : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setViewType('evolution')}
        >
          Key Assumption Evolution
        </button>
        <button
          className={`px-4 py-2 rounded-md text-[12px] font-medium transition-all duration-200 ${
            viewType === 'comparison' 
            ? 'bg-white text-gray-800 shadow-sm' 
            : 'text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => setViewType('comparison')}
        >
          Assumption Comparison Analysis
        </button>
      </div>
      
      <div className="flex-grow overflow-hidden">
        {viewType === 'evolution' ? renderEvolutionView() : renderComparisonView()}
      </div>
    </div>
  );
};

export default AnalysisTab;