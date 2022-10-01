import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Place from './Place';
import Game from './Game';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Navigation />} >
        <Route index element={<Home/>} />
        <Route path='place' element={<Place />} />
        <Route path='game' element={<Game />} />
        <Route path='about' element={<About />} />
    </Route>
  </Routes>
  );
}

export default App;
