import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

function Place () {
  return (
    <div className="App">
      <header className="App-header">
          <h1>
              Place your units
          </h1>
      </header>
      <Board />
    </div>
  );
}

export default Place;

