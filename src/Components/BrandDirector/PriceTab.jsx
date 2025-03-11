import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { MoveUpRight } from 'lucide-react';

const PriceTab = () => {
    const chartRef = useRef(null);
    
    useEffect(() => {
        // Initialize the ECharts instance
        let chartInstance = echarts.init(chartRef.current);
    
        // ECharts waterfall configuration
        const option = {
            
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    var tar = params[1];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitLine: { show: false },
                data: ['Previous Cycle', 'Price', 'Volume', 'Current Cycle']
            },
            yAxis: {
                type: 'value',
                name: 'Value'
            },
            series: [
                {
                    name: 'Placeholder',
                    type: 'bar',
                    stack: 'Total',
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: 'transparent',
                            color: 'transparent'
                        }
                    },
                    // These values determine where each bar starts
                    data: [0, 1000, 1200, 2700]
                },
                {
                    name: 'Product Value',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}'
                    },
                    itemStyle: {
                        color: function(params) {
                            // Color logic for different stages
                            const colors = {
                                'Previous Cycle': '#11749e',
                                'Price': '#11749e',
                                'Volume': '#11749e',
                                'Current Cycle': '#ed5f68'
                            };
                            return colors[params.name] || '#4a90e2';
                        }
                    },
                    // The actual values shown for each step
                    data: [1000, 200, 1500, -2000]  // -2000 is calculated to make final sum = 700
                }
            ]
        };

        // Set the option and render the chart
        chartInstance.setOption(option);
        
        // Handle resize
        const resizeHandler = () => {
            chartInstance.resize();
        };
        
        window.addEventListener('resize', resizeHandler);
        
        // Cleanup
        return () => {
            chartInstance.dispose();
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);
    
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start gap-1">
                <span className="text-teal-600 text-[16px] font-[500]">
                    Price vs Volume Analysis
                </span>
            </div>
            <div className="flex w-full h-full gap-4">
                <div className="w-[80%] border h-[20rem] rounded-lg">
                    <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
                </div>

                <div className="flex flex-col border rounded-lg h-[6rem] w-[20%] p-1 gap-2">
                    <span className="text-[10px] text-gray-600">
                        Export
                    </span>

                    <div className="flex justify-between gap-2">
                        <div className="flex">
                            <span className="text-[12px] text-gray-600">
                                Power BI
                            </span>
                        </div>
                        <MoveUpRight className="w-4 h-4 text-teal-600"/>
                    </div>
                    <div className="w-full px-1 border"></div>
                    <div className="flex justify-between gap-2">
                        <div className="flex">
                            <span className="text-[12px] text-gray-600">
                                Power Point
                            </span>
                        </div>
                        <MoveUpRight className="w-4 h-4 text-teal-600"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceTab;