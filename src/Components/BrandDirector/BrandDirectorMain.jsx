import React, { useState } from 'react'
import { ChevronDown, NotebookText, ChartColumnIncreasing, Cylinder, CircleDollarSign, ChartNoAxesCombined, BookOpenCheck, SlidersVertical, History } from 'lucide-react'
import AssumptionsTab from './AssumptionsTab'
import ForecastOverviewTab from './ForecastOverview'
import VolumeTab from './VolumeTab'
import PriceTab from './PriceTab'
import AnalysisTab from './AnalysisTab'
import EvalutionTab from './EvalutionTab'
import HistoryTab from './HistoryTab'
import SensitivityTab from './SensitivityTab'

const BrandDirectorMain = () => {

  const [currentTab, setcurrentTab] = useState('Assumptions')
  const [showFilterOptions, setShowFilterOptions] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState({
    "Forecast Cycle": "",
    "Country": "",
    "Indication": "",
    "Product": "",
    "Time Horizon": "",
    "Start Year": ""
  })

  const filters = [
    {
      name: "Forecast Cycle",
      options: ["Mid-Term Planning", "Long Term Planning", "Short Term Planning"]
    },
    {
      name: "Country",
      options: ["USA", "Europe", "Global"]
    },
    {
      name: "Indication",
      options: ["Immunology", "Oncology", "Cardiology", "Neurology"]
    },
    {
      name: "Product",
      options: ["Product A", "Product B", "Product C", "Product D"]
    },
    {
      name: "Time Horizon",
      options: ["5 Years", "10 Years", "15 Years"]
    },
    {
      name: "Start Year",
      options: ["2024", "2025", "2026", "2027"]
    }
  ]

  const naviagtion = [
    {
      name: "Assumptions",
      path: "Assumptions",
      icon: NotebookText,
    },
    {
      name: "Forecasts",
      path: "Forecasts",
      icon: ChartColumnIncreasing,
    },
    {
      name: "Volume",
      path: "Volume",
      icon: Cylinder,
    },
    {
      name: "Price",
      path: "Price",
      icon: CircleDollarSign,
    },
    {
      name: "Analysis",
      path: "Analysis",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Evaluation",
      path: "Evaluation",
      icon: BookOpenCheck,
    },
    {
      name: "Sensitivity",
      path: "Sensitivity",
      icon: SlidersVertical,
    },
    {
      name: "History",
      path: "History",
      icon: History,
    },
  ]

  const handleFilterClick = (index) => {
    if (showFilterOptions === index) {
      setShowFilterOptions(null)
    } else {
      setShowFilterOptions(index)
    }
  }

  const handleOptionSelect = (filterName, option) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: option
    })
    setShowFilterOptions(null)
  }

  const renderContent = () => {
    switch (currentTab) {
      case "Assumptions":
        return <AssumptionsTab />
      case "Forecasts":
        return <ForecastOverviewTab />
      case "Volume":
        return <VolumeTab />
      case "Price":
        return <PriceTab />
      case "Analysis":
        return <AnalysisTab />
      case "Evaluation":
        return <EvalutionTab />
      case "Sensitivity":
        return <SensitivityTab />
      case "History":
        return <HistoryTab />
    }
  }
  return (
    <div className="mt-[4.5rem] p-6 bg-gray-50">
      {/* filters */}
      <div className='flex justify-start items-center gap-2'>
        {
          filters.map((filter, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => handleFilterClick(index)}
                className='flex justify-between items-center rounded-lg border border-teal-600 w-[8rem] h-6 p-1 cursor-pointer'>
                <span className='text-gray-700 text-[10px]'>
                  {selectedFilters[filter.name] || filter.name}
                </span>
                <ChevronDown className='text-teal-600 w-4 h-4' />
              </div>
              
              {showFilterOptions === index && (
                <div className="absolute top-7 left-0 w-[8rem] bg-white border border-gray-300 rounded-md shadow-md z-10">
                  {filter.options.map((option, optIndex) => (
                    <div 
                      key={optIndex} 
                      className="text-[10px] p-2 hover:bg-teal-50 cursor-pointer text-gray-700"
                      onClick={() => handleOptionSelect(filter.name, option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        }
      </div>

      <div className='pt-6 pb-2'>
        <div className='flex w-full gap-4'>
          <div className='flex flex-col w-[12%] h-[28rem] rounded-lg border-gray-300 gap-3 py-4 pr-2'>
            {
              naviagtion.map((navigator, index) => (
                <div key={index}
                  onClick={() => setcurrentTab(navigator.path)}
                  className={`flex justify-start text-gray-600 w-full items-center border-b-[1.5px] border-x border-l-[1.5px] border-gray-300 rounded-lg h-10 p-1 gap-3 cursor-pointer
                    ${currentTab === navigator.path
                      ? "bg-teal-600 text-white shadow-xl border-teal-700"
                      : "bg-white hover:bg-teal-500 hover:text-white"
                    }
                    `
                  }>
                  {
                    <navigator.icon className='w-4 h-4' />
                  }
                  <span className='text-[10px] font-[500] '> {navigator.name}</span>
                </div>
              ))
            }
          </div>

          <div className='w-[88%] h-[28rem] bg-white rounded-lg border-b-[2px] border-x border-l-[2.5px] border-gray-300 px-4 py-2 shadow-lg'>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandDirectorMain