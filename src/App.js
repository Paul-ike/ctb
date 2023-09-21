import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Process from './components/Process/Process';
import Pricing from './components/Pricing/Pricing';
import Order from './components/Order/Order';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/weddings" element={<Process />} />
          <Route path="/home/studio" element={<Pricing />} />
          <Route path="/order" element={<Order />} />
        </Routes>
    </Router>
  )
}

export default App