import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './projets/dashboard';
import Dashboard1 from './projets/dashboard1';
import Dashboard2 from './projets/dashboard2';
import Payement from './projets/payement';
import Pricing from './projets/pricing';
import PlanDetail from './projets/PlanDetail';
import Confirmation from './projets/Confirmation'; // Create this component for the new page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Vous pouvez afficher les autres composants comme vous le souhaitez */}
        {/* <Dashboard /> */}
        {/* <Dashboard1 /> */}
        <Dashboard2 />
        {/* <Payement /> */}
        
        <Routes>
          {/* Page principale avec les plans */}
          <Route path="/" element={<Pricing />} />
          {/* <Route path="/confirmation" element={<Confirmation />} /> */}
          {/* Page de détail du plan, avec un paramètre de plan dynamique */}
          {/* <Route path="/pricing/:plan" element={<PlanDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

