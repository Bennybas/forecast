import React from 'react'
import { BadgeDollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const VolumeTab = () => {


    const results =[
        {
          id: "Total Units",
          value: "1,76,000",
        },
        {
          id: "Total Patients",
          value: "88,000",
        },
        {
          id: "Peak Year",
          value: "2033",
        },
        {
          id: "Peak Units",
          value: "23,000",
        },
        {
          id: "Peak Patients",
          value: "11,500",
        },
    ];

    const data = [
        { year: 2028, units: 5000, patients: 7000 },
        { year: 2029, units: 9000, patients: 12000 },
        { year: 2030, units: 13000, patients: 17000 },
        { year: 2031, units: 16000, patients: 21000 },
        { year: 2032, units: 19000, patients: 27000 },
        { year: 2033, units: 23000, patients: 33000 }, 
        { year: 2034, units: 21000, patients: 30000 },
        { year: 2035, units: 20000, patients: 28000 },
        { year: 2036, units: 19000, patients: 26000 },
        { year: 2037, units: 18000, patients: 24000 },
        { year: 2038, units: 17000, patients: 22000 },
      ];
      

  return (
    <div className='flex flex-col gap-4 '>
    <div className='flex flex-col justify-start gap-1'>
        <span className='text-teal-600 text-[16px] font-[500]'>
        Volume Overview
        </span>
    </div>

    <div className='flex w-full h-full gap-4'>
      <div className='w-[70%] border h-[24rem] rounded-lg'>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
                <XAxis 
                    dataKey="year"
                    tick={{ fontSize: 9, fill: '#666' }}
                    label={{ value: 'Year', position: 'bottom', offset: -10, fill: '#666', fontSize: 13, }}
                />
                <YAxis 
                    tick={{ fontSize: 12, fill: '#666' }}
                    label={{ value: 'Count', angle: -90, position: 'left', offset: -5, fill: '#666', fontSize: 13 }}
                />
                <Tooltip
                    contentStyle={{ fontSize: '12px', background: '#fff', border: '1px solid #ccc' }}
                    cursor={{ fill: 'rgba(136, 132, 216, 0.1)' }}
                />
                <Area type="monotone" dataKey="units" stroke="#0e88c4" fill="#0e88c4" fillOpacity={0.5} />
                <Area type="monotone" dataKey="patients" stroke="#89d1f5" fill="#89d1f5" fillOpacity={0.5} />
            </AreaChart>
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
              </div>
            ))
          }


      </div>

    </div>
</div>
  )
}

export default VolumeTab