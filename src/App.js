import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { useState } from "react";
import Landing from "./Landing/Landing";
import ForecastCreation from './Components/ForecastCreation/ForecastCreation';
import Header from './Header/Header';
import ForecastAlgorithm from './Components/ForecastCreation/PatientBased/ForecastAlgorithm';
import ForeCastTable from './Components/ForecastCreation/PatientBased/ForecastTable/ForeCastTable';
import BrandDirectorMain from './Components/BrandDirector/BrandDirectorMain';
import ForecastCreationV1 from './Components/ForecastCreation/ForecastCreationV1';
import TrendBasedMain from './Components/ForecastCreation/TrendBased/TrendBasedMain';
import TrendBasedMainV2 from './Components/ForecastCreation/TrendBasedV2/TrendBasedMainV2';
import TablePage from './Components/ForecastCreation/TrendBasedV2/TablePage';
import PortfolioForecastPage from './Components/ForecastCreation/TrendBasedV2/PortfolioForecast';
import ForecastArchieve from './Components/ForecastCreation/TrendBasedV2/ForecastArchieve';
import LoadedData from './Components/ForecastCreation/TrendBasedV2/LoadedData';
import ForecastOptionPage from './Components/ForecastCreation/TrendBasedV2/ForecastOptionPage';

function App() {
  const [isLoading, setIsLoading] = useState(false); 
  
  return (
    <Router> {/* Router should wrap everything */}
      <div>
        <Header /> {/* Now Header is inside Router */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forcast-creation" element={<ForecastCreationV1 />} />
          <Route path="/trend-based" element={<TrendBasedMainV2 />} />
          <Route path="/forecast-algorithm" element={<ForecastAlgorithm />} />
          <Route path="/forecast-table" element={<ForeCastTable />}/>
          <Route path="/brand-main" element={<BrandDirectorMain />}/>
          <Route path="/table-page" element={<TablePage />}/>
          <Route path="/archieve-page" element={<ForecastArchieve />}/>
          <Route path="/loadeddata-page" element={<LoadedData />}/>
          <Route path="/options-page" element={<ForecastOptionPage />}/>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
