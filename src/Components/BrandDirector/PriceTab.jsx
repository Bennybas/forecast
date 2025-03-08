import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {MoveUpRight} from 'lucide-react'

const PriceTab = () => {
    // Updated dataset with multiple products
    const data = [
        { stage: "Previous Cycle", Product1: 1000, Product2: 1200, Product3: 900 },
        { stage: "Price", Product1: 200, Product2: 50, Product3: 300 },  
        { stage: "Volume", Product1: 1500, Product2: 800, Product3: 500 },  
        { stage: "Current Cycle", Product1: 700, Product2: 1300, Product3: 1000 }  
    ];
    

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-start gap-1'>
                <span className='text-teal-600 text-[16px] font-[500]'>
                    Price vs Volume Analysis (Multiple Products)
                </span>
            </div>
            <div className='flex w-full h-full gap-4'>
            <div className='w-[80%] border h-[24rem] rounded-lg'>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={data} margin={{ top: 20, right: 35, left: 10, bottom: 40 }}>
                        <XAxis 
                            dataKey="stage" 
                            label={{ value: 'Stages', position: 'bottom', offset: -10 }} 
                            tick={{ fontSize: 12, fill: '#666' }} 
                        />
                        <YAxis 
                            label={{ value: 'Value', angle: -90, position: 'left', offset: -5 }} 
                            tick={{ fontSize: 12, fill: '#666' }} 
                        />
                        <Tooltip />
                        <Legend />
                        {/* Product 1 */}
                        <Area 
                            type="monotone" 
                            dataKey="Product1" 
                            stroke="#4a90e2" 
                            fill="rgba(74, 144, 226, 0.5)" 
                            fillOpacity={0.6} 
                            name="Product 1"
                        />
                        {/* Product 2 */}
                        <Area 
                            type="monotone" 
                            dataKey="Product2" 
                            stroke="#e24a4a" 
                            fill="rgba(226, 74, 74, 0.5)" 
                            fillOpacity={0.6} 
                            name="Product 2"
                        />
                        {/* Product 3 */}
                        <Area 
                            type="monotone" 
                            dataKey="Product3" 
                            stroke="#4ae27f" 
                            fill="rgba(74, 226, 127, 0.5)" 
                            fillOpacity={0.6} 
                            name="Product 3"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className='flex flex-col border rounded-lg h-[6rem] w-[20%] p-1 gap-2'>
                <span className='text-[10px] text-gray-600'>
                    Export
                </span>

                <div className='flex justify-between gap-2'>
                    <div className='flex'>
                        <span className='text-[12px] text-gray-600'>
                            Power BI
                        </span>

                    </div>

                    <MoveUpRight className='w-4 h-4 text-teal-600'/>
                </div>
                <div className='w-full px-1 border'></div>
                <div className='flex justify-between gap-2'>
                    <div className='flex'>
                        <span className='text-[12px] text-gray-600'>
                            Power Point
                        </span>

                    </div>
                    <MoveUpRight className='w-4 h-4 text-teal-600'/>
                </div>

            </div>
            </div>
        </div>
    );
}

export default PriceTab;
