import React, { useState } from 'react'
import { ChevronDown, NotebookText, ChartColumnIncreasing, Cylinder, CircleDollarSign, ChartNoAxesCombined, BookOpenCheck, SlidersVertical, History } from 'lucide-react'
import HistoryData from './HistoryData'
import TrendAnalysisTab from './TrendAnalysisTab'
import ForecastPreviewTab from './ForecastPreviewTab'
import ForecastParametersTab from './ForecastParametersTab'


const TrendBasedMain = () => {

  const [currentTab, setcurrentTab] = useState('Historical Data')
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
      name: "Historical Data",
      path: "Historical Data",
      icon: History,
    },
    {
      name: "Trend Analysis",
      path: "Trend Analysis",
      icon: ChartColumnIncreasing,
    },
    {
      name: "Forecast Parameters",
      path: "Forecast Parameters",
      icon: Cylinder,
    },

    {
      name: "Forecast Preview",
      path: "Forecast Preview",
      icon: BookOpenCheck,
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

        case "Historical Data":
            return <HistoryData />
        case "Trend Analysis":
            return <TrendAnalysisTab />
        case "Forecast Preview":
            return <ForecastPreviewTab />
        case "Forecast Parameters":
            return <ForecastParametersTab />
      
    }
  }
  return (
    <div className="mt-[4.5rem] p-6 bg-gray-50">
      {/* filters */}
      <div className='flex justify-between items-center gap-2 bg-white border-b-[1.5px] border-x border-l-[1.5px] border-gray-300 w-full h-[3rem] rounded-xl py-2 px-4'>
        <div className='flex flex-col justify-start items-start gap-1'>
            <span className='text-teal-600 text-[14px] font-[500]'>
                Trend Based Model
            </span>
            <span className='text-[10px]'>
                Immunology Indication 1 - Mid Term Planning - United States of America - 3 Years - Product 1 - 2024
                </span>
        </div>

        <div className='flex gap-2'>
            <div className='flex border border-teal-600 h-6 w-28 rounded-lg justify-center items-center cursor-pointer'>
                <span className="text-[14px] text-teal-600">Save</span>
                
            </div>
            <div 
            
            className='flex bg-teal-600 h-6 w-28 rounded-lg justify-center items-center cursor-pointer'>
                <span className='text-[14px] text-white'>Create Forecast</span>
            </div>
        </div>
        
      </div>

      <div className='pt-6 pb-2'>
        <div className='flex w-full gap-4'>
          <div className='flex flex-col w-[12%] h-[25rem] rounded-lg border-gray-300 gap-3 py-4 pr-2'>
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

          <div className='w-[88%] h-[25rem] bg-white rounded-lg border-b-[2px] border-x border-l-[2.5px] border-gray-300 px-4 py-2 shadow-lg'>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendBasedMain