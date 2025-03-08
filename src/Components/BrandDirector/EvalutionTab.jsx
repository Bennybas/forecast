import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MoveUpRight } from 'lucide-react';

const EvalutionTab = () => {
    // Updated dataset with new values
    const data = [
        { stage: "Previous Cycle", value: 844.2 },
        { stage: "Launch Delay", value: 0 },  // Placeholder
        { stage: "Incidence", value: 20 },  
        { stage: "Market Share", value: 10 },  
        { stage: "DoT", value: 50 },  // Placeholder
        { stage: "Adherence", value: 80 },  
        { stage: "Price Increment", value: 8 },  
        { stage: "Current Cycle", value: 865.6 }  
    ];
    
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-start gap-1'>
                <span className='text-teal-600 text-[16px] font-[500]'>
                    Product 1_Forecast Evolution
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
                            {/* Area Chart for the Single Product */}
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#4a90e2" 
                                fill="rgba(74, 144, 226, 0.5)" 
                                fillOpacity={0.6} 
                                name="Value"
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

export default EvalutionTab;
