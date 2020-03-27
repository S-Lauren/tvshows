import React from 'react';
import './App.css';
import FirstComponent from '../FirstComponent';
import Series from '../../containers/Series';
import 'whatwg-fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Tv Show App </p>
      </header>
      <FirstComponent message= "Search all your favorite tv-shows :)" />
      <Series /> 

    </div>
  );
}

export default App;
