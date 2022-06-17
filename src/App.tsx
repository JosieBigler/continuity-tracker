import React from 'react';
import './App.css';
import Home from './Components/Home';

function App() {
  const obj = {title: 'Alice', subtitle: 'Austria'};
  return (
    <div className="App">
      <Home {...obj}/>
    </div>
  );
}

export default App;
