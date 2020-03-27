import React from 'react';
import './App.css';
import FirstComponent from '../FirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Tv Show App </p>
      </header>
      <FirstComponent message= "Search all your favorite tv-shows :)" />
    </div>
  );
}

export default App;
