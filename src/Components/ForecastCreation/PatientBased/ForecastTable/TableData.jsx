"use client"

import { useState } from "react"

const TableData = () => {
  const [selectedSubtype, setSelectedSubtype] = useState("Subtype1")

  // Years array for mapping
  const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033]

  // Data objects for each section
  const data = {
    population: [
      333318411, 335854751, 338434625, 340713817, 342800916, 344994645, 346978326, 348689569, 350140014, 351818042,
    ],
    percentIncidence: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    incidencePopulation: [2121934, 2138042, 2154429, 2168899, 2182150, 2196080, 2208675, 2219535, 2228718, 2239352],
    subtypePercentages: {
      subtype1: [30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0],
      subtype2: [45.0, 45.0, 45.0, 45.0, 45.0, 45.0, 45.0, 45.0, 45.0, 45.0],
      subtype3: [25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0],
    },
    subtypeIncidence: {
      subtype1: [636580, 641413, 646329, 650670, 654645, 658824, 662603, 665861, 668616, 671806],
      subtype2: [954870, 962119, 969493, 976004, 981968, 988236, 993904, 998791, 1002923, 1007708],
      subtype3: [530484, 534511, 538607, 542225, 545538, 549020, 552169, 554884, 557180, 559838],
    },
    dxRate: [85, 85, 85, 85, 85, 85, 85, 85, 85, 85],
    diagnosedPopulation: [541093, 545201, 549379, 553069, 556448, 560000, 563212, 565982, 568323, 571035],
    txRate: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
    treatedPatients: [378765, 381641, 384565, 387148, 389514, 392000, 394249, 396187, 397826, 399724],
    eligiblePercentage: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
    eligiblePatients: [303012, 305312, 307652, 309719, 311611, 313600, 315399, 316950, 318261, 319779],
    marketShare: [0.5, 1.2, 2.4, 3.8, 5.2, 7.0, 8.5, 9.8, 10.5, 11.0],
    targetPatients: [1515, 3664, 7384, 11769, 16204, 21952, 26809, 31061, 33417, 35176],
    annualCostPerPatient: [15000, 15300, 15606, 15918, 16236, 16561, 16892, 17230, 17575, 17926],
    revenuePotential: [22.73, 56.05, 115.18, 187.34, 263.09, 363.52, 452.85, 535.18, 587.3, 630.3],
  }

  // Function to format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  // Function to format percentages
  const formatPercentage = (num) => {
    return `${num.toFixed(1)}%`
  }

  // Function to format currency in millions
  const formatCurrencyMillions = (num) => {
    return `$${num.toFixed(2)}M`
  }

  // Function to format currency
  const formatCurrency = (num) => {
    return `$${num.toLocaleString()}`
  }

  // Function to handle save outputs
  const handleSaveOutputs = () => {
    // Implement your save functionality here
    console.log("Saving outputs to master data...")
    // You could implement an actual API call here
    alert("Outputs saved to Master Data successfully!")
  }

  // Reusable table component
  const DataTable = ({ data, bgColor = "bg-white", formatter = formatNumber, label = null, source = null }) => (
    <div className="mb-4">
      {label && (
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-medium text-gray-700 mr-4">{label}</h2>
          {source && (
            <div className="relative">
              <select className="bg-teal-50 border border-teal-300 rounded-md px-3 py-1 text-xs text-teal-800">
                <option>{source}</option>
              </select>
            </div>
          )}
        </div>
      )}
      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {years.map((year) => (
                <th key={year} className="border-b border-gray-300 bg-gray-50 p-2 text-xs font-medium text-gray-700">
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.map((value, index) => (
                <td
                  key={index}
                  className={`border-r last:border-r-0 border-gray-200 ${bgColor} p-2 text-xs text-center`}
                >
                  {formatter(value)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="w-full p-6 font-sans bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Market Estimation</h1>
        
      </div>

      {/* Population Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-medium text-gray-700">Population</h2>
          <div className="flex items-center text-xs">
            <span className="mr-2 text-gray-600">Select Age Range</span>
            <div className="flex items-center">
              <select className="bg-teal-50 border border-teal-300 rounded-md px-3 py-1 text-xs text-teal-800 mr-2">
                <option>18</option>
              </select>
              <span className="mx-2 text-gray-600">to</span>
              <select className="bg-teal-50 border border-teal-300 rounded-md px-3 py-1 text-xs text-teal-800">
                <option>35</option>
              </select>
            </div>
          </div>
        </div>

        <DataTable data={data.population} bgColor="bg-amber-50" />
      </div>

      {/* Percent of Incidence */}
      <DataTable
        data={data.percentIncidence}
        bgColor="bg-amber-50"
        formatter={(num) => `${num.toFixed(1)}%`}
        label="Percent of Incidence"
        source="DRG"
      />

      {/* Incidence Population */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-700 mb-2">Incidence Population</h2>
        <DataTable data={data.incidencePopulation} bgColor="bg-teal-50" />

        <div className="mt-4 space-y-4">
          <DataTable
            data={data.subtypePercentages.subtype1}
            bgColor="bg-amber-50"
            formatter={(num) => `${num.toFixed(1)}%`}
            label="% of Sub type 1"
            source="DRG"
          />

          <DataTable
            data={data.subtypePercentages.subtype2}
            bgColor="bg-amber-50"
            formatter={(num) => `${num.toFixed(1)}%`}
            label="% of Sub type 2"
            source="DRG"
          />

          <DataTable
            data={data.subtypePercentages.subtype3}
            bgColor="bg-amber-50"
            formatter={(num) => `${num.toFixed(1)}%`}
            label="% of Sub type 3"
            source="DRG"
          />
        </div>
      </div>

      {/* Incidence of Subtypes */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-700 mb-4">Incidence of Subtypes</h2>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-medium text-gray-600 mb-1 block">Sub type 1</span>
            <DataTable data={data.subtypeIncidence.subtype1} bgColor="bg-teal-50" />
          </div>

          <div>
            <span className="text-xs font-medium text-gray-600 mb-1 block">Sub type 2</span>
            <DataTable data={data.subtypeIncidence.subtype2} bgColor="bg-teal-50" />
          </div>

          <div>
            <span className="text-xs font-medium text-gray-600 mb-1 block">Sub type 3</span>
            <DataTable data={data.subtypeIncidence.subtype3} bgColor="bg-teal-50" />
          </div>
        </div>
      </div>

      {/* Target Patients by Sub type */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-medium text-gray-700 mr-4">Target Patients by Sub type</h2>
          <div className="relative">
            <select
              className="bg-teal-50 border border-teal-300 rounded-md px-3 py-1 text-xs text-teal-800"
              value={selectedSubtype}
              onChange={(e) => setSelectedSubtype(e.target.value)}
            >
              <option value="Subtype1">Subtype 1</option>
            </select>
          </div>
        </div>

        <DataTable data={data.subtypeIncidence.subtype1} bgColor="bg-teal-50" />
      </div>

      {/* Dx Rate */}
      <DataTable
        data={data.dxRate}
        bgColor="bg-amber-50"
        formatter={(num) => `${num}%`}
        label="Dx Rate"
        source="IQVIA"
      />

      {/* Diagnosed Population */}
      <DataTable data={data.diagnosedPopulation} bgColor="bg-teal-50" label="Diagnosed Population" />

      {/* Tx Rate */}
      <DataTable
        data={data.txRate}
        bgColor="bg-amber-50"
        formatter={(num) => `${num}%`}
        label="Tx Rate"
        source="IQVIA"
      />

      {/* Treated Patients */}
      <DataTable data={data.treatedPatients} bgColor="bg-teal-50" label="Treated Patients" />

      {/* %Eligible Pts */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-medium text-gray-700 mr-4">%Eligible Pts</h2>
          <span className="text-xs text-gray-600">Select Source</span>
        </div>

        <DataTable data={data.eligiblePercentage} bgColor="bg-amber-50" formatter={(num) => `${num}%`} />
      </div>

      {/* Eligible Patients */}
      <DataTable data={data.eligiblePatients} bgColor="bg-teal-50" label="Eligible Patients" />

      {/* Market Share */}
      <DataTable
        data={data.marketShare}
        bgColor="bg-amber-50"
        formatter={(num) => `${num.toFixed(1)}%`}
        label="Market Share"
      />

      {/* Target Patients */}
      <DataTable data={data.targetPatients} bgColor="bg-teal-50" label="Target Patients" />

      {/* Annual Cost Per Patient */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <h2 className="text-sm font-medium text-gray-700 mr-4">Annual Cost Per Patient</h2>
          <span className="text-xs text-gray-600">Select Source</span>
        </div>

        <DataTable data={data.annualCostPerPatient} bgColor="bg-amber-50" formatter={formatCurrency} />
      </div>

      {/* Revenue Potential */}
      <DataTable
        data={data.revenuePotential}
        bgColor="bg-teal-50"
        formatter={formatCurrencyMillions}
        label="Revenue Potential (in Millions)"
      />
        
        <div className="flex justify-end">
        <button
            onClick={handleSaveOutputs}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
            >
            Save Outputs in Master Data
            </button>

        </div>
         

      {/* Forecast Outputs Section */}
      <div className="mt-12 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Forecast Outputs</h2>
        
        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-300 bg-gray-50 p-2 text-xs font-medium text-gray-700">--</th>
                <th className="border-b border-gray-300 bg-gray-50 p-2 text-xs font-medium text-gray-700">--</th>
                <th className="border-b border-gray-300 bg-gray-50 p-2 text-xs font-medium text-gray-700">--</th>
                <th className="border-b border-gray-300 bg-gray-50 p-2 text-xs font-medium text-gray-700">--</th>
                {years.map((year) => (
                  <th key={year} className="border-b border-gray-300 bg-gray-50 p-2 text-xs font-medium text-gray-700">
                    {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Eligible Patients Row */}
              <tr className="border-b border-gray-200">
                <td className="p-2 text-xs">Immunology indication 1</td>
                <td className="p-2 text-xs">US</td>
                <td className="p-2 text-xs">Downside</td>
                <td className="p-2 text-xs">Eligible Patients</td>
                {years.map((year, index) => (
                  <td key={index} className="p-2 text-xs text-center">--</td>
                ))}
              </tr>
              
              {/* Volume Row */}
              <tr className="border-b border-gray-200">
                <td className="p-2 text-xs">Immunology indication 1</td>
                <td className="p-2 text-xs">US</td>
                <td className="p-2 text-xs">Downside</td>
                <td className="p-2 text-xs">Volume (000s)</td>
                {years.map((year, index) => (
                  <td key={index} className="p-2 text-xs text-center">--</td>
                ))}
              </tr>
              
              {/* Gross Sales Row */}
              <tr className="border-b border-gray-200">
                <td className="p-2 text-xs">Immunology indication 1</td>
                <td className="p-2 text-xs">US</td>
                <td className="p-2 text-xs">Downside</td>
                <td className="p-2 text-xs">Gross Sales ($ Mn)</td>
                {years.map((year, index) => (
                  <td key={index} className="p-2 text-xs text-center">--</td>
                ))}
              </tr>
              
              {/* Net Sales Row */}
              <tr>
                <td className="p-2 text-xs">Immunology indication 1</td>
                <td className="p-2 text-xs">US</td>
                <td className="p-2 text-xs">Downside</td>
                <td className="p-2 text-xs">Net Sales ($ Mn)</td>
                {years.map((year, index) => (
                  <td key={index} className="p-2 text-xs text-center">--</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableData