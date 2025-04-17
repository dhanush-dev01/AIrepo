// Added workflow trigger comment - April 17, 2025
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
function App() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    );
  }

  export default App;