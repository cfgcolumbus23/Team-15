import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Home from './pages/Homepage';
import Roadmap from './pages/Roadmap';
 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadmap' element={<Roadmap />} />
      </Routes>
    </Router>
  );
}
 
export default App;