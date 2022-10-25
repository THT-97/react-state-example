import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const bootcamp = useState("Rookies");
  return(
    <div className="App">
      <Navbar/>
      <Home bootcamp={bootcamp}/>
    </div>
  );
}

export default App;
