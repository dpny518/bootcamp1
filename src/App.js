import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update the import
import Interview from './components/Interview';
import Report from './components/Report';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Interview />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
