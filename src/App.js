import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App