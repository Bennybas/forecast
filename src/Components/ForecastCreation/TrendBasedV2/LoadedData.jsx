import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Mock data to simulate API response
const mockIQVIAData = {
  actuals: Array(11)
    .fill(null)
    .map((_, i) => ({
      month: `Month ${i + 1}`,
      value: Math.floor(Math.random() * 1000) + 500,
    })),
  models: [
    {
      name: "Linear",
      errorType: "R-Square",
      errorValue: "0.92",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "Logarithmic",
      errorType: "R-Square",
      errorValue: "0.88",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "Exponential",
      errorType: "R-Square",
      errorValue: "0.91",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "ARIMA",
      errorType: "MAE/MAPE",
      errorValue: "3.2%",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "SARIMA",
      errorType: "MAE/MAPE",
      errorValue: "2.8%",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "Holtz-Winter",
      errorType: "MAE/MAPE",
      errorValue: "3.5%",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "AI/ML trendline",
      errorType: "MAE/MAPE",
      errorValue: "2.1%",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "Gaussian Estimate",
      errorType: "MAE/MAPE",
      errorValue: "3.7%",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "LSTM",
      errorType: "",
      errorValue: "",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
    {
      name: "Customization",
      errorType: "",
      errorValue: "",
      values: Array(11)
        .fill(null)
        .map(() => Math.floor(Math.random() * 1000) + 500),
    },
  ],
};

const LoadedData = () => {
    const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadIQVIAData = () => {
    setLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setData(mockIQVIAData);
      setLoading(false);
    }, 1000);
  };

  const clearData = () => {
    setData(null);
  };

  const addData = () => {
    // No functionality as requested
    return;
  };

  // Custom Button component
  const Button = ({ onClick, disabled, className, children }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-md flex items-center justify-center ${className}`}
      >
        {children}
      </button>
    );
  };

  return (

    <div className='mt-[5rem] px-8'>

    
    <div className=' rounded-2xl bg-white border w-full shadow-lg'>
        <div className='h-10 bg-gray-200 rounded-t-2xl flex justify-center items-center'>
            <span className='text-[16px] font-[500] text-gray-800 p-1'>
                Forecast Creation
            </span>

        </div>
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-medium">Trendline</h1>
        <div className="text-[14px] flex gap-2">
          <Button onClick={loadIQVIAData} disabled={loading} className="bg-teal-600 hover:bg-teal-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Load IQVIAData
          </Button>
          <Button onClick={clearData} className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            <Trash2 className="h-4 w-4 mr-2 text-blue-600" />
            Clear Data
          </Button>
          <Button onClick={addData} className="bg-teal-600 hover:bg-teal-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Data
          </Button>
        </div>
      </div>

      {/* Actuals Table */}
      <div className="overflow-x-auto mb-6 border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-600 divide-x divide-teal-500">
              {Array(11)
                .fill(null)
                .map((_, i) => (
                  <th key={i} className="text-center font-medium text-white border p-2 text-[13px]">
                    Actuals
                  </th>
                ))}
            </tr>
            <tr className="bg-teal-600 divide-x divide-teal-500">
              {Array(11)
                .fill(null)
                .map((_, i) => (
                  <th key={i} className="text-center font-normal text-white border p-2 text-[12px]">
                    Month {i + 1}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="divide-x">
              {Array(11)
                .fill(null)
                .map((_, i) => (
                  <td key={i} className="text-center border p-2 text-[10px] text-gray-600">
                    {data?.actuals[i]?.value || ""}
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Forecasting Models Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-600 divide-x divide-teal-500">
              <th className="font-medium text-white border w-40 p-2 text-[13px] text-left">Base line trending</th>
              <th className="font-medium text-white border w-40 p-2 text-[13px] text-left">Statistical errors</th>
              <th className="font-medium text-white border text-center p-2 text-[13px]" colSpan={11}>
                Actuals
              </th>
            </tr>
            <tr className="bg-teal-600 divide-x divide-teal-500">
              <th className="border text-white p-2 text-[12px]"></th>
              <th className="border text-white p-2 text-[12px]"></th>
              {Array(11)
                .fill(null)
                .map((_, i) => (
                  <th key={i} className="text-center font-normal text-white border p-2 text-[12px]">
                    Month {i + 1}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {data
              ? data.models.map((model, index) => (
                  <tr key={index} className="divide-x">
                    <td className="font-medium text-center border p-2 text-[10px] text-gray-600">{model.name}</td>
                    <td className="text-center border p-2 text-[10px] text-gray-600">{model.errorValue ? model.errorType : ""}</td>
                    {model.values.map((value, i) => (
                      <td key={i} className="text-center border p-2 text-[10px] text-gray-600">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))
              : // Empty rows when no data is loaded
                Array(10)
                  .fill(null)
                  .map((_, index) => (
                    <tr key={index} className="divide-x">
                      <td className="font-medium text-center border p-2 text-[10px] text-gray-600">
                        {
                          [
                            "Linear",
                            "Logarithmic",
                            "Exponential",
                            "ARIMA",
                            "SARIMA",
                            "Holtz-Winter",
                            "AI/ML trendline",
                            "Gaussian Estimate",
                            "LSTM",
                            "Customization",
                          ][index]
                        }
                      </td>
                      <td className="text-center border p-2 text-[10px] text-gray-600">
                        {index < 3 ? "R-Square" : index < 8 ? "MAE/MAPE" : ""}
                      </td>
                      {Array(11)
                        .fill(null)
                        .map((_, i) => (
                          <td key={i} className="text-center border p-2 text-[10px] text-gray-600"></td>
                        ))}
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>

      <div 
           onClick={()=> navigate('/table-page')}
          className='flex justify-end mt-4'>
            <button className='bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition'>
              Create Forecast
            </button>
          </div>
    </div>
    </div>
    </div>
  );
};

export default LoadedData;