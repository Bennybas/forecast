import React from 'react'

const AssumptionsTab = () => {

    const data = [
        {
          name: "Forecast Cycle",
          title: "Mid-Term Planning",
          details: [
            "Q1 2024",
            "3-year projection",
            "Quarterly updates"
          ]
        },
        {
          name: "Country",
          title: "USA",
          details: [
            "Primary market",
            "FDA approved",
            "Medicare coverage"
          ]
        },
        {
          name: "Indication",
          title: "Immunology Indication 1",
          details: [
            "Target population: 3.8M",
            "Competitive landscape: 5 products",
            "Market growth: 8% YoY"
          ]
        },
        {
          name: "Product",
          title: "Product 1",
          details: [
            "Launch date: Jan 2028",
            "Patent expiry: 2040",
            "Novel mechanism"
          ]
        },
        {
          name: "Time Horizon",
          title: "3 years",
          details: [
            "2024-2027",
            "Quarterly milestones",
            "Annual reviews"
          ]
        },
        {
          name: "Start Year",
          title: "2024",
          details: [
            "Baseline year",
            "Historical data available",
            "Regulatory approval expected"
          ]
        }
      ];      
  return (
    <div className='flex flex-col gap-4 '>
        <div className='flex flex-col justify-start gap-1'>
            <span className='text-teal-600 text-[16px] font-[500]'>
            Forecast Assumptions
            </span>
            <span className='text-gray-500 text-[12px]'>
            This forecast has been created based on the following key assumptions and parameters
            </span>
        </div>

        <div className='flex w-full flex-wrap gap-3'>
            {
                data.map((info,index)=>(
                    <div 
                    key={index}
                    className='w-[32%] h-[10rem] bg-[#e6ffff] rounded-lg border'>
                        <div className='flex h-10 w-full bg-teal-600 rounded-t-lg justify-start items-center p-2'>
                            <span className='text-white text-[14px] font-[500]'>
                                {info.name}
                            </span>
                        </div>

                        <div className='flex flex-col p-2'>
                            <span className='text-teal-600 text-[13px] font-[500]'>
                                {info.title}
                            </span> 

                            {

                                info.details.map((detail,i) =>(
                                    <div className='flex justify-start gap-2 items-center p-1'>
                                        <div className="w-1 h-1 rounded-full ring-2 ring-teal-500 flex items-center justify-center">
                                        </div>
                                        <span  className='text-gray-600 text-[12px] font-[500]'>
                                            {detail}
                                        </span>

                                    </div>
                                ))
                            }

                            

                            
                        </div>

                    </div>
                ))
            }
            

        </div>
    </div>
  )
}

export default AssumptionsTab