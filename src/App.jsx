import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Navigation />} >
        <Route index element={<Home/>} />
        <Route path='about' element={<About />} />
    </Route>
  </Routes>
  );
}

export default App;
