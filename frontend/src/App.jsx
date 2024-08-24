import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MappingAndNavigation from './components/MappingAndNavigation';
import FacilityMarkersAndInformation from './components/FacilityMarkersAndInformation';
import TrainArrivalInformation from './components/TrainArrivalInformation';
import RoutingAndDirection from './components/RoutingAndDirection';
import UserInteraction from './components/UserInteraction';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mapping-and-navigation" element={<MappingAndNavigation />} />
        <Route path="/facility-markers-and-information" element={<FacilityMarkersAndInformation />} />
        <Route path="/train-arrival-information" element={<TrainArrivalInformation />} />
        <Route path="/routing-and-direction" element={<RoutingAndDirection />} />
        <Route path="/user-interaction" element={<UserInteraction />} />
      </Routes>
    </Router>
  );
};

export default App;
