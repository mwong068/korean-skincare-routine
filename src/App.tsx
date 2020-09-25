import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default App;
