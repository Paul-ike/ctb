import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Process from './components/Process/Process';
import Pricing from './components/Pricing/Pricing';
import Order from './components/Order/Order';
import Terms from './components/Terms/Terms';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/weddings" element={<Process />} />
          <Route path="/home/studio" element={<Pricing />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/t&c" element={<Terms />} />
        </Routes>
    </Router>
  )
}

export default App