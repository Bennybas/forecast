import React from "react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

// Enhanced color palette for better visual appeal
const colors = {
  "Custom": "#3B82F6", // bright blue
  "Holtz-Winter": "#EF4444", // bright red
  "Best Fit Curve": "#10B981", // emerald green
  "ARIMA": "#8B5CF6", // purple
  "Linear": "#F59E0B", // amber
  "Actual Data": "#0EA5E9" // sky blue
}

// Generate simplified data for 12 months with clearer trends
const generateSampleData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Base values with some seasonal patterns
  const baseValues = {
    "Actual Data": [65000, 67000, 72000, 75000, 77000, 80000, 85000, 88000, 86000, 82000, 80000, 84000],
    "Linear": [64000, 66000, 68000, 70000, 72000, 74000, 76000, 78000, 80000, 82000, 84000, 86000],
    "ARIMA": [65000, 68000, 73000, 76000, 79000, 81000, 86000, 89000, 87000, 83000, 81000, 85000],
    "Holtz-Winter": [64500, 67500, 74000, 77000, 76000, 80000, 87000, 90000, 86000, 80000, 78000, 83000],
    "Best Fit Curve": [66000, 69000, 73000, 75000, 78000, 82000, 85000, 87000, 85000, 83000, 82000, 85000],
    "Custom": [65000, 68000, 70000, 77000, 80000, 83000, 89000, 92000, 88000, 82000, 79000, 86000]
  };
  
  return months.map((month, index) => ({
    month: month,
    "Actual Data": baseValues["Actual Data"][index],
    "Linear": baseValues["Linear"][index],
    "ARIMA": baseValues["ARIMA"][index],
    "Holtz-Winter": baseValues["Holtz-Winter"][index],
    "Best Fit Curve": baseValues["Best Fit Curve"][index],
    "Custom": baseValues["Custom"][index]
  }));
};

export const LineChart = ({ 
  categories = ["Actual Data", "Linear", "ARIMA", "Holtz-Winter", "Best Fit Curve", "Custom"],
  yAxisWidth = 50, 
  className 
}) => {
  // Use generated sample data
  const data = generateSampleData();
  
  // Format Y-axis ticks with K notation
  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `${Math.round(value / 1000)}k`;
    }
    return value;
  };

  // Custom tooltip with enhanced styling
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
          <p className="font-medium text-gray-800 mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry, index) => (
              <div key={`item-${index}`} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                <p className="text-sm">
                  <span className="font-medium">{entry.name}: </span>
                  <span>{Math.round(entry.value).toLocaleString()}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 60,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            horizontal={true} 
            vertical={false} 
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: '#d1d5db' }}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 10 }}
          />
          <YAxis
            tickFormatter={formatYAxis}
            axisLine={{ stroke: '#d1d5db' }}
            tickLine={false}
            width={yAxisWidth}
            tick={{ fill: '#6b7280', fontSize: 10 }}
            domain={['dataMin - 5000', 'dataMax + 5000']}
            label={{ 
              value: 'Volume', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#4b5563', fontSize: 11 }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {categories.map((category) => (
            <Line
              key={category}
              type="monotone"
              dataKey={category}
              name={category}
              stroke={colors[category]}
              strokeWidth={2.5}
              dot={{ stroke: colors[category], strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
              animationDuration={1500}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;