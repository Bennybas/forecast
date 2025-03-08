import React,{useState} from 'react'
import {ChevronDown,NotebookText,ChartColumnIncreasing,Cylinder,CircleDollarSign,ChartNoAxesCombined,BookOpenCheck,SlidersVertical,History} from 'lucide-react'
import AssumptionsTab from './AssumptionsTab'
import ForecastOverviewTab from './ForecastOverview'
import VolumeTab from './VolumeTab'
import PriceTab from './PriceTab'
import AnalysisTab from './AnalysisTab'
import EvalutionTab from './EvalutionTab'
import HistoryTab from './HistoryTab'
import SensitivityTab from './SensitivityTab'

const BrandDirectorMain = () => {

  const[currentTab,setcurrentTab] = useState('Assumptions')

  const filters =[
    "Forecast Cycle","Country","Indication","Product","Time Horizon","Start Year"
  ]

  const naviagtion =[
    {
      name:"Assumptions",
      path:"Assumptions",
      icon:NotebookText,
    },
    {
      name:"Forecasts",
      path:"Forecasts",
      icon:ChartColumnIncreasing,
    },
    {
      name:"Volume",
      path:"Volume",
      icon:Cylinder,
    },
    {
      name:"Price",
      path:"Price",
      icon:CircleDollarSign,
    },
    {
      name:"Analysis",
      path:"Analysis",
      icon:ChartNoAxesCombined,
    },
    {
      name:"Evaluation",
      path:"Evaluation",
      icon:BookOpenCheck,
    },
    {
      name:"Sensitivity",
      path:"Sensitivity",
      icon:SlidersVertical,
    },
    {
      name:"History",
      path:"History",
      icon:History,
    },
    
    
  ]

  const renderContent = () => {
    switch(currentTab) {
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
          filters.map((names,index) =>(
            <div 
            key={index}
            className='flex justify-between items-center rounded-lg border border-teal-600 w-[8rem] h-6 p-1'>
              <span className='text-gray-700 text-[10px]'>
                {names}
              </span>
              <ChevronDown className='text-teal-600 w-4 h-4'/>

            </div>
          ))
        }
       </div>

       <div className='pt-6 pb-2'>
        <div className='flex w-full gap-4'>
            <div className='flex flex-col w-[12%] h-[28rem] rounded-lg  border-gray-300 gap-3 py-4 pr-2'>
              {
                naviagtion.map((navigator,index) =>(
                  <div key={index} 
                  onClick={() => setcurrentTab(navigator.path)}
                  className={`flex justify-start text-gray-600 w-full items-center border-b-[1.5px] border-x border-l-[1.5px] border-gray-300 rounded-lg h-10 p-1 gap-3 cursor-pointer
                    ${
                      currentTab === navigator.path 
                      ?"bg-teal-600 text-white shadow-xl border-teal-700"
                      :"bg-white hover:bg-teal-500 hover:text-white"
                     }
                    `
                  }>
                      {
                       <navigator.icon className='w-4 h-4'/>
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