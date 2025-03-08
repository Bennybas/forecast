import React from "react";
import { BarChart, Bar, XAxis, YAxis, ReferenceLine, Cell } from 'recharts';
import { MessageSquare } from 'lucide-react';

const SensitivityTab = () => {
  // Data for Sensitivity Analysis
  const sensitivityData = [
    {
      keyAssumption: "Market Share estimates (DMARD)",
      downside: "50%",
      baseCase: "55%",
      upside: "60%",
    },
    {
      keyAssumption: "Market Access",
      downside: "80%",
      baseCase: "90%",
      upside: "100%",
    },
    {
      keyAssumption: "Mean DoT (months)",
      downside: "5",
      baseCase: "5.5",
      upside: "6",
    },
    {
      keyAssumption: "Adherence Rate",
      downside: "70%",
      baseCase: "80%",
      upside: "90%",
    },
    {
      keyAssumption: "Progression/Switching Rates",
      downside: "50%",
      baseCase: "55%",
      upside: "60%",
    },
    {
      keyAssumption: "GTN",
      downside: "15%",
      baseCase: "10%",
      upside: "5%",
    },
    {
      keyAssumption: "Price estimates",
      downside: "$200",
      baseCase: "$220",
      upside: "$240",
    },
  ];

  // Data for the tornado chart based on the image
  const tornadoData = [
    { name: 'Market Share estimates (DMARD)', value: -40, type: 'negative', isLarge: true },
    { name: 'Market Access', value: 25, type: 'positive', isLarge: true },
    { name: 'Mean DoT (months)', value: -10, type: 'negative', isLarge: false },
    { name: 'Adherence Rate', value: 5, type: 'positive', isLarge: false },
    { name: 'Progression/Switching Rates', value: -8, type: 'negative', isLarge: false },
    { name: 'GTN', value: 5, type: 'positive', isLarge: false },
    { name: 'Price estimates', value: 15, type: 'positive', isLarge: true },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col justify-start gap-1">
        <span className="text-teal-600 text-[16px] font-[500]">
          Sensitivity Analysis
        </span>
      </div>

      {/* Table Wrapper with Fixed Width */}
      <div className="flex w-full gap-4">
        <div className="w-[60%] border rounded-lg overflow-auto max-h-72">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium p-3 sticky top-0">
            <div className="col-span-4 text-xs">Key Assumptions</div>
            <div className="col-span-2 text-xs">Downside</div>
            <div className="col-span-2 text-xs">Base Case</div>
            <div className="col-span-2 text-xs">Upside</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {sensitivityData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-4 font-medium text-teal-700 text-xs">
                  {item.keyAssumption}
                </div>
                <div className="col-span-2 text-gray-600 text-xs">
                  {item.downside}
                </div>
                <div className="col-span-2 text-gray-800 text-xs">
                  {item.baseCase}
                </div>
                <div className="col-span-2 text-gray-700 text-xs">
                  {item.upside}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[40%] border rounded-lg p-2 flex flex-col">
          <div className="font-medium text-sm mb-2">Base Case $ 500 Mn</div>
          
          {/* Legend similar to BudgetStatus */}
          <div className="flex gap-2 mb-2 w-full justify-end pr-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#c98b27]"></div>
              <span className="text-gray-600 text-xs">Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#004567]"></div>
              <span className="text-gray-600 text-xs">Negative</span>
            </div>
          </div>
          
          <div className="w-full h-full flex-grow">
            <BarChart
              width={360}
              height={240}
              data={tornadoData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis 
                type="number" 
                domain={[-50, 50]} 
                ticks={[-50, -30, 0, 30, 50]}
                tickFormatter={(value) => `${value}`}
                tick={{ fontSize: 10 }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 9 }}
                width={80}
              />
              <ReferenceLine x={0} stroke="#666" />
              <Bar 
                dataKey="value" 
                barSize={25}
                radius={[4, 4, 4, 4]}
                label={(props) => {
                  const { x, y, width, value, index } = props;
                  const item = tornadoData[index];
                  const type = item.type;
                  const isLarge = item.isLarge;
                  
                  // Position adjustments for labels
                  const xPos = type === 'negative' ? x - 10 : x + width + 10;
                  
                  return (
                    <text
                      x={xPos}
                      y={y + 4}
                      fill="#666"
                      textAnchor="middle"
                      fontSize="10"
                    >
                      {Math.abs(value)}
                    </text>
                  );
                }}
              >
                {tornadoData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.type === 'positive' ? '#c98b27' : '#004567'}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center w-[60%]">
        <span className="text-xs text-gray-500">
          Showing {sensitivityData.length} assumptions
        </span>
        <button className="px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors text-xs">
          Export Data
        </button>
      </div>
    </div>
  );
};

export default SensitivityTab;