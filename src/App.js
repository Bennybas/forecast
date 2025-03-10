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

function App() {
  const [isLoading, setIsLoading] = useState(false); 
  
  return (
    <Router> {/* Router should wrap everything */}
      <div>
        <Header /> {/* Now Header is inside Router */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forcast-creation" element={<ForecastCreationV1 />} />
          <Route path="/trend-based" element={<TrendBasedMain />} />
          <Route path="/forecast-algorithm" element={<ForecastAlgorithm />} />
          <Route path="/forecast-table" element={<ForeCastTable />}/>
          <Route path="/brand-main" element={<BrandDirectorMain />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
