// src/App.js
import React from 'react';
import './App.css';
import ProductTable from './ProductTable';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Revenue Aggregator</h1>
      </header>
      <ProductTable />
    </div>
  );
};

export default App;
