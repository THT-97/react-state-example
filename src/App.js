import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  const bootcamp = useState("Rookies");
  return(
    <div className="App">
      <Navbar/>
      <Home bootcamp={bootcamp}/>
      <Contact/>
    </div>
  );
}

export default App;
