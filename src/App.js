import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ColorGenerator from './components/ColorGenerator';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/color-generator">Color Generator</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/color-generator" element={<ColorGenerator />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2024 Color Generator App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;


