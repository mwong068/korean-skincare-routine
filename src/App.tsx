import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="card"></div>
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default App;
