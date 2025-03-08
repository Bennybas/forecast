import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const AlgoCreationArea = () => {
    const [flowchartNodes, setFlowchartNodes] = useState([]);
    const [connections, setConnections] = useState([]);

    const marketEstimation = [
        { id: 'me-1', content: 'Population', type: 'marketEstimation' },
        { id: 'me-2', content: 'Incidence', type: 'marketEstimation' },
        { id: 'me-3', content: 'Prevalence', type: 'marketEstimation' },
        { id: 'me-4', content: 'Biomarker', type: 'marketEstimation' },
        { id: 'me-5', content: 'Diagnosed Patient', type: 'marketEstimation' },
        { id: 'me-6', content: 'Treated Patients', type: 'marketEstimation' },
        { id: 'me-7', content: 'Eligible Patient', type: 'marketEstimation' },
        { id: 'me-8', content: 'Market Access', type: 'marketEstimation' },
        { id: 'me-9', content: 'Progression/LoT', type: 'marketEstimation' },
    ];

    const marketshares = [
        { id: 'ms-1', name: 'Product/Market Event', type: 'marketShares' },
        { id: 'ms-2', name: 'Event Share', type: 'marketShares' },
        { id: 'ms-3', name: 'Patient on Product', type: 'marketShares' },
        { id: 'ms-4', name: 'Uptake Curves', type: 'marketShares' },
        { id: 'ms-5', name: 'LoE Curve', type: 'marketShares' }
    ];

    const conversion = [
        { id: 'c-1', name: 'No of units of Patient', type: 'conversion' },
        { id: 'c-2', name: 'Complaince', type: 'conversion' },
        { id: 'c-3', name: 'Volume 000\'s', type: 'conversion' },
        { id: 'c-4', name: 'Price per Unit', type: 'conversion' },
        { id: 'c-5', name: 'GTN', type: 'conversion' },
        { id: 'c-6', name: 'Net sales', type: 'conversion' }
    ];

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        
        // Dropped outside the droppable area
        if (!destination) {
            return;
        }

        // If the item was dropped in the flowchart area
        if (destination.droppableId === 'flowchart-area') {
            let newNode;
            
            // Determine which list the dragged item belongs to
            if (source.droppableId === 'market-estimation') {
                newNode = { ...marketEstimation[source.index], position: { x: 100, y: 100 + flowchartNodes.length * 80 } };
            } else if (source.droppableId === 'market-shares') {
                newNode = { ...marketshares[source.index], content: marketshares[source.index].name, position: { x: 100, y: 100 + flowchartNodes.length * 80 } };
            } else if (source.droppableId === 'conversion') {
                newNode = { ...conversion[source.index], content: conversion[source.index].name, position: { x: 100, y: 100 + flowchartNodes.length * 80 } };
            }

            // Add the node to flowchart
            setFlowchartNodes([...flowchartNodes, { ...newNode, id: `${newNode.id}-${Date.now()}` }]);
            
            // If there's a previous node, create a connection
            if (flowchartNodes.length > 0) {
                const prevNode = flowchartNodes[flowchartNodes.length - 1];
                setConnections([...connections, {
                    id: `connection-${prevNode.id}-${newNode.id}`,
                    from: prevNode.id,
                    to: `${newNode.id}-${Date.now()}`
                }]);
            }
        }
    };

    const handleNodeClick = (nodeId) => {
        const updatedNodes = flowchartNodes.filter(node => node.id !== nodeId);
        const updatedConnections = connections.filter(conn => conn.from !== nodeId && conn.to !== nodeId);
        
        setFlowchartNodes(updatedNodes);
        setConnections(updatedConnections);
    };

    const getBgColorClass = (type) => {
        switch (type) {
            case 'marketEstimation':
                return 'bg-teal-100';
            case 'marketShares':
                return 'bg-[#1f6587]';
            case 'conversion':
                return 'bg-teal-600';
            default:
                return 'bg-gray-200';
        }
    };

    const getTextColorClass = (type) => {
        switch (type) {
            case 'marketEstimation':
                return 'text-gray-700';
            case 'marketShares':
            case 'conversion':
                return 'text-white';
            default:
                return 'text-gray-700';
        }
    };

    // Draw SVG arrows between connected nodes
    const renderArrows = () => {
        return connections.map((connection) => {
            const fromNode = flowchartNodes.find(node => node.id === connection.from);
            const toNode = flowchartNodes.find(node => node.id === connection.to);
            
            if (!fromNode || !toNode) return null;
            
            // Calculate arrow positions
            const startX = fromNode.position.x + 100; // center of node
            const startY = fromNode.position.y + 20; // bottom of node
            const endX = toNode.position.x + 100; // center of node
            const endY = toNode.position.y; // top of node
            
            return (
                <svg key={connection.id} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <defs>
                        <marker 
                            id={`arrowhead-${connection.id}`} 
                            markerWidth="10" 
                            markerHeight="7" 
                            refX="9" 
                            refY="3.5" 
                            orient="auto"
                        >
                            <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
                        </marker>
                    </defs>
                    <path 
                        d={`M${startX},${startY} L${endX},${endY}`} 
                        stroke="#000" 
                        strokeWidth="2" 
                        fill="none" 
                        markerEnd={`url(#arrowhead-${connection.id})`} 
                    />
                </svg>
            );
        });
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className='flex w-full p-4 gap-8'>
                <div className='flex flex-col w-[40%] gap-4'>
                    <div className='h-8 bg-teal-600 flex justify-center items-center p-1'>
                        <span className='text-white text-[16px] font-[500]'> Parameters</span>
                    </div>
                    <div className='h-10 border border-[1.5px] border-teal-600 flex rounded-b-2xl justify-center items-center p-1'>
                        <span className='text-gray-700 text-[14px] font-[500]'>Market Estimation</span>
                    </div>
                    <Droppable droppableId="market-estimation" direction="horizontal">
                        {(provided) => (
                            <div 
                                className="flex flex-wrap gap-4"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {marketEstimation.map((data, index) => (
                                    <Draggable 
                                        key={data.id} 
                                        draggableId={data.id} 
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="h-8 border bg-teal-100 flex rounded-2xl w-[30%] justify-center items-center p-1 cursor-pointer"
                                            >
                                                <span className="text-gray-700 text-[12px] font-[400]">
                                                    {data.content}
                                                </span> 
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <div className='py-0.5'></div>
                    <div className='h-10 border border-[1.5px] border-[#004567] flex rounded-b-2xl justify-center items-center '>
                        <span className='text-gray-700 text-[14px] font-[500]'>Market Shares</span>
                    </div>
                    <Droppable droppableId="market-shares" direction="horizontal">
                        {(provided) => (
                            <div 
                                className="flex flex-wrap gap-4"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {marketshares.map((data, index) => (
                                    <Draggable 
                                        key={data.id} 
                                        draggableId={data.id} 
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="h-8 border bg-[#1f6587] flex rounded-2xl w-[30%] justify-center items-center p-1 cursor-pointer"
                                            >
                                                <span className="text-white text-[12px] font-[400]">
                                                    {data.name}
                                                </span> 
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <div className='py-0.5'></div>
                    <div className='h-10 border border-[1.5px] border-teal-600 flex rounded-b-2xl justify-center items-center '>
                        <span className='text-gray-700 text-[14px] font-[500]'>Conversion</span>
                    </div>
                    <Droppable droppableId="conversion" direction="horizontal">
                        {(provided) => (
                            <div 
                                className="flex flex-wrap gap-4"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {conversion.map((data, index) => (
                                    <Draggable 
                                        key={data.id} 
                                        draggableId={data.id} 
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="h-8 border bg-teal-600 flex rounded-2xl w-[30%] justify-center items-center p-1 cursor-pointer"
                                            >
                                                <span className="text-white text-[12px] font-[400]">
                                                    {data.name}
                                                </span> 
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>

                <div className='flex flex-col w-[60%] gap-4'>
                    <div className='h-8 bg-teal-600 flex justify-center items-center p-1'>
                        <span className='text-white text-[16px] font-[500]'> Create Forecast Algorithm</span>
                    </div>
                    <Droppable droppableId="flowchart-area">
                        {(provided) => (
                            <div 
                                className='border-dashed border border-teal-600 w-full h-full relative min-h-[500px]'
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {/* Render flowchart nodes */}
                                {flowchartNodes.map((node, index) => (
                                    <div
                                        key={node.id}
                                        className={`absolute rounded-2xl ${getBgColorClass(node.type)} border flex justify-center items-center p-1 w-[200px] h-10`}
                                        style={{
                                            top: `${node.position.y}px`,
                                            left: `${node.position.x}px`,
                                        }}
                                    >
                                        <span className={`${getTextColorClass(node.type)} text-[12px] font-[400]`}>
                                            {node.content}
                                        </span>
                                        <button 
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                                            onClick={() => handleNodeClick(node.id)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                                
                                {/* Render arrows between nodes */}
                                {renderArrows()}
                                
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </DragDropContext>
    );
};

export default AlgoCreationArea;