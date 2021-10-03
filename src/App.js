import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
import React, { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);
  const click = ()=>clicked? setClicked(false) : setClicked(true);

  return (
    <div className="app">
      <Header />
      <DatingCards clicked={ clicked } />
      <SwipeButtons click={ click } />
    </div>
  );
}

export default App;
