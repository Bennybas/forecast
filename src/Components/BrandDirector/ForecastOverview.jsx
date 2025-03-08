import { BadgeDollarSign } from 'lucide-react';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const ForecastOverviewTab = () => {

  const forecastData = [
    { year: '2028', value: 10000 },
    { year: '2029', value: 20000 },
    { year: '2030', value: 40000 },
    { year: '2031', value: 60000 },
    { year: '2032', value: 80000 },
    { year: '2033', value: 60000 },
    { year: '2034', value: 40000 },
    { year: '2035', value: 20000 },
    { year: '2036', value: 0 },
    { year: '2037', value: 20000 },
    { year: '2038', value: 40000 },
  ];

  const results =[
    {
      id:"Total Forecast",
      value:"0.59M",
      dollar:true
    },
    {
      id:"Peak Sales",
      value:"78.0k",
      dollar:true
    },
    {
      id:"Peak Year",
      value:"2033",
      dollar:false
    },

  ]
  return (
    <div className='flex flex-col gap-4 '>
        <div className='flex flex-col justify-start gap-1'>
            <span className='text-teal-600 text-[16px] font-[500]'>
            Forecast Overview
            </span>
        </div>

        <div className='flex w-full h-full gap-4'>
          <div className='w-[70%] border h-[24rem] rounded-lg'>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={forecastData}
                margin={{
                  top: 25,
                  right: 10,
                  left: -10,
                  bottom:20
                }}
                barSize={45}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 9, fill: '#666' }}
                />
                <YAxis
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  domain={[0, 100000]}
                />
                <Tooltip
                  contentStyle={{ fontSize: '12px', background: '#fff', border: '1px solid #ccc' }}
                  cursor={{ fill: 'rgba(136, 132, 216, 0.1)' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#0e88c4" 
                  radius={[10, 10, 5, 5]} 
                  background={{ fill: '#e0e0e0', radius: [10, 10, 0, 0] }}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>
          <div className='flex flex-col w-[30%] h-[24rem] rounded-lg px-1 gap-2'>
              {
                results.map((val,i) =>(
                  <div 
                  key ={i} className='flex flex-col bg-[#b5f5ef]/50 h-[5rem] w-full rounded-lg p-2 gap-1 justify-center'>
                    <span className='text-gray-700 text-[12px] font-[500]'>
                      {val.id}
                    </span>
                    
                    
                    {
                      val.dollar ===true 
                      ?(
                        <div className='flex gap-2 items-center'>
                        <BadgeDollarSign className='text-[#407340] w-5 h-5'/>
                        <span className='text-[#36857e] text-[18px] font-[500]'>
                          {val.value}
                        </span>
                        </div>
                       
                      )
                      :(
                        <div className='flex gap-2 items-center'>
                        
                        <span className='text-[#36857e] text-[18px] font-[500]'>
                          {val.value}
                        </span>
                        </div>
                      )
                    }
                   
                    {/* {
                      val.dollar ===true 
                      ?(
                        <div className='flex justify-end'>
                           <BadgeDollarSign className='text-[#36857e] w-8 h-8'/>
                        </div>
                       
                      )
                      :(
                        <div>
                        </div>
                      )
                    } */}
                  </div>
                ))
              }


          </div>

        </div>
    </div>
  )
}

export default ForecastOverviewTab