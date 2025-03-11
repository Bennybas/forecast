import { useState } from "react"
import LineChart from "./LineChart"
import React from "react"

const actualData = {
  months: Array.from({ length: 11 }, (_, i) => `Month ${i + 1}`),
  values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 739, 743],
}

const modelData = [
  { name: "Linear", type: "R-Square", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "Logarithmic", type: "R-Square", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "Exponential", type: "R-Square", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "ARIMA", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "SARIMA", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "Holtz-Winter", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "AI/ML trendline", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "Gaussian Estimate", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "LSTM", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
  { name: "Customization", type: "MAE/MAPE", values: [722, 728, 727, 726, 732, 731, 731, 736, 736, 735, 739] },
]

const chartData = Array.from({ length: 36 }, (_, i) => ({
  month: i + 1,
  Custom: Math.floor(Math.random() * 40000) + 60000,
  "Holtz-Winter": Math.floor(Math.random() * 40000) + 60000,
  "Chryo Cast Best Fit Curve": Math.floor(Math.random() * 40000) + 60000,
  ARIMA: Math.floor(Math.random() * 40000) + 60000,
  Linear: Math.floor(Math.random() * 40000) + 60000,
  "Actual Data Curve": Math.floor(Math.random() * 40000) + 60000,
}))

const events = [
  {
    sno: 1,
    name: "Regulaotry change",
    impact: "10%",
    uptake: "4 Years Fast",
    startDate: "May-26",
  },
  {
    sno: 2,
    name: "Clinical trail update",
    impact: "5%",
    uptake: "4 Years Fast",
    startDate: "Aug-25",
  },
]

// Custom button component
const Button = ({ children, variant, className, ...props }) => {
  const baseClasses = "px-4 py-2 rounded flex items-center justify-center font-medium";
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent border border-current hover:bg-gray-50",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className || ""}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Custom Card component
const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

// Icon components
const Plus = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Edit = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const Save = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"width="16" height="16"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-6 h-6"}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17 21 17 13 7 13 7 21"></polyline>
    <polyline points="7 3 7 8 15 8"></polyline>
  </svg>
);

// Updated Table components with new styling
const Table = ({ children, ...props }) => <table className="w-full border-collapse rounded-lg overflow-hidden" {...props}>{children}</table>;
const TableHeader = ({ children, ...props }) => <thead {...props}>{children}</thead>;
const TableBody = ({ children, ...props }) => <tbody {...props}>{children}</tbody>;
const TableRow = ({ children, className, ...props }) => <tr className={className || ""} {...props}>{children}</tr>;
const TableHead = ({ children, className, ...props }) => <th className={`py-2 px-3 text-left bg-teal-600 text-white text-xs ${className || ""}`} {...props}>{children}</th>;
const TableCell = ({ children, className, ...props }) => <td className={`py-2 px-3 text-gray-600 text-xs border-b border-gray-200 ${className || ""}`} {...props}>{children}</td>;

export default function TablePage() {
  const [selectedModel, setSelectedModel] = useState("SARIMA")

  return (
    <div className='mt-[5rem] px-8'>

    
    <div className=' rounded-2xl bg-white border w-full shadow-lg'>
        
    <div className="container mx-auto py-6 space-y-6 px-4 w-full">
      {/* Trendline Section */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold">Trendline</h2>

        {/* Actuals Table */}
        <div className="w-full ">
          <Table>
            <TableHeader>
              <TableRow>
                {actualData.months.map((month) => (
                  <TableHead key={month} className="text-center font-medium text-white border-r border-teal-500 last:border-r-0">
                    Actuals
                  </TableHead>
                ))}
              </TableRow>
              <TableRow>
                {actualData.months.map((month) => (
                  <TableHead key={month} className="text-center font-normal text-white border-r border-teal-500 last:border-r-0">
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {actualData.values.map((value, index) => (
                  <TableCell key={index} className="text-center border-r border-gray-200 last:border-r-0">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Models Table */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">Base line trending</TableHead>
                <TableHead className="font-medium border-r border-teal-500">Statistical errors</TableHead>
                {actualData.months.map((month, idx) => (
                  <TableHead key={month} className={`text-center font-normal border-r border-teal-500 ${idx === actualData.months.length - 1 ? 'border-r-0' : ''}`}>
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {modelData.map((model) => (
                <TableRow key={model.name} className={model.name === selectedModel ? "bg-green-50" : ""}>
                  <TableCell className="font-medium border-r border-gray-200">{model.name}</TableCell>
                  <TableCell className="border-r border-gray-200">{model.type}</TableCell>
                  {model.values.map((value, index) => (
                    <TableCell key={index} className={`text-center ${index < model.values.length - 1 ? 'border-r border-gray-200' : ''}`}>
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Chart Section */}
      <section className="space-y-4">
        <Card className="p-6">
          <div className="h-[400px]">
            <LineChart
              data={chartData}
              categories={[
                "Custom",
                "Holtz-Winter",
                "Chryo Cast Best Fit Curve",
                "ARIMA",
                "Linear",
                "Actual Data Curve",
              ]}
              index="month"
              yAxisWidth={56}
              className="h-full"
            />
          </div>
        </Card>
      </section>

      {/* Events Section */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold">Events</h2>
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">S.no</TableHead>
                <TableHead className="font-medium border-r border-teal-500">Event name</TableHead>
                <TableHead className="font-medium border-r border-teal-500">Impact on base line</TableHead>
                <TableHead className="font-medium border-r border-teal-500">Uptake curve</TableHead>
                <TableHead className="font-medium">Start date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.sno}>
                  <TableCell className="border-r border-gray-200">{event.sno}</TableCell>
                  <TableCell className="border-r border-gray-200">{event.name}</TableCell>
                  <TableCell className="border-r border-gray-200">{event.impact}</TableCell>
                  <TableCell className="border-r border-gray-200">{event.uptake}</TableCell>
                  <TableCell>{event.startDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Final Tables Section */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold">Final Forecast Tables</h2>
        
        {/* Final Trendline Table */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">Final Trendline</TableHead>
                <TableHead className="font-medium border-r border-teal-500">Technique</TableHead>
                {actualData.months.map((month, idx) => (
                  <TableHead key={month} className={`text-center font-medium border-r border-teal-500 ${idx === actualData.months.length - 1 ? 'border-r-0' : ''}`}>
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-yellow-50">
                <TableCell className="border-r border-gray-200">
                  Product 1<br />
                  10MG volumes
                </TableCell>
                <TableCell className="border-r border-gray-200">ARIMA</TableCell>
                {[1, 5, 10, 14, 18, 23, 27, 31, 35, 40, 44].map((value, index) => (
                  <TableCell key={index} className={`text-center ${index < 10 ? 'border-r border-gray-200' : ''}`}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Gross Price Table */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">Gross price</TableHead>
                {actualData.months.map((month, idx) => (
                  <TableHead key={month} className={`text-center font-medium border-r border-teal-500 ${idx === actualData.months.length - 1 ? 'border-r-0' : ''}`}>
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r border-gray-200">
                  Product 1<br />
                  10MG volumes
                </TableCell>
                {Array(11)
                  .fill("$100")
                  .map((value, index) => (
                    <TableCell key={index} className={`text-center ${index < 10 ? 'border-r border-gray-200' : ''}`}>
                      {value}
                    </TableCell>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* GTN Table */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">GTN</TableHead>
                {actualData.months.map((month, idx) => (
                  <TableHead key={month} className={`text-center font-medium border-r border-teal-500 ${idx === actualData.months.length - 1 ? 'border-r-0' : ''}`}>
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r border-gray-200">
                  Product 1<br />
                  10MG volumes
                </TableCell>
                {Array(11)
                  .fill("5%")
                  .map((value, index) => (
                    <TableCell key={index} className={`text-center ${index < 10 ? 'border-r border-gray-200' : ''}`}>
                      {value}
                    </TableCell>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Net Price Table */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">Net price</TableHead>
                {actualData.months.map((month, idx) => (
                  <TableHead key={month} className={`text-center font-medium border-r border-teal-500 ${idx === actualData.months.length - 1 ? 'border-r-0' : ''}`}>
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r border-gray-200">
                  Product 1<br />
                  10MG volumes
                </TableCell>
                {Array(11)
                  .fill("$95")
                  .map((value, index) => (
                    <TableCell key={index} className={`text-center ${index < 10 ? 'border-r border-gray-200' : ''}`}>
                      {value}
                    </TableCell>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Net Sales Table */}
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium border-r border-teal-500">
                  Net sales<br />
                  ($000's)
                </TableHead>
                {actualData.months.map((month, idx) => (
                  <TableHead key={month} className={`text-center font-medium border-r border-teal-500 ${idx === actualData.months.length - 1 ? 'border-r-0' : ''}`}>
                    {month}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r border-gray-200">
                  Product 1<br />
                  10MG volumes
                </TableCell>
                {[0.1, 0.5, 0.91, 1.32, 1.73, 2.14, 2.55, 2.96, 3.37, 3.78, 4.18].map((value, index) => (
                  <TableCell key={index} className={`text-center ${index < 10 ? 'border-r border-gray-200' : ''}`}>
                    ${value.toFixed(2)}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" className="border-teal-600 text-teal-600 text-[12px]">
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" className="border-teal-600 text-teal-600 text-[12px]">
          <Edit className="w-4 h-4 mr-2" />
          Edit Forecast
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700 text-[12px]">
          <Plus className="w-4 h-4 mr-2" />
          Create New
        </Button>
      </div>
    </div>
    </div>
    </div>
  )
}