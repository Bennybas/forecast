import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { MoveUpRight } from 'lucide-react';

const PriceTab = () => {
    const chartRef = useRef(null);
    
    useEffect(() => {
        let chartInstance = echarts.init(chartRef.current);
    
        const option = {
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    return params.name + '<br/>' + params.seriesName + ' : ' + params.value;
                }
            },
            legend: {
                data: ['Previous Cycle', 'Price', 'Volume', 'Current Cycle'],
                textStyle: {
                    fontSize: 10  // Adjust the font size as needed
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
                data: ['Previous Cycle', 'Price', 'Volume', 'Current Cycle']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Placeholder',
                    type: 'bar',
                    stack: 'Total',
                    silent: true,
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
                    data: [0, 1000, 820, 0]
                },
                {
                    name: 'Previous Cycle',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    itemStyle: { color: '#1480b5' },
                    data: [1000, '-', '-', '-']
                },
                {
                    name: 'Price',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    itemStyle: { color: '#008979' },
                    data: ['-', 120, '-', '-']
                },
                {
                    name: 'Volume',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'bottom'
                    },
                    itemStyle: { color: 'red' },
                    data: ['-', '-', 300, '-']
                },
                {
                    name: 'Current Cycle',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    itemStyle: { color: '#1480b5' },
                    data: ['-', '-', '-', 820]
                },
            ]
        };

        chartInstance.setOption(option);
        
        const resizeHandler = () => {
            chartInstance.resize();
        };
        
        window.addEventListener('resize', resizeHandler);
        
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