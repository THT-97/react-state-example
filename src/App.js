import './App.css';
import Home from './components/Home';
import { Component, useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    this.state = {bootcamp: "Rookies"};
    return(
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar/>
            <Routes>
              <Route exact path="/Home" element={<Home bootcamp={this.statebootcamp}/>}/>
              <Route exact path="/Contact" element={<Contact/>}/>
              <Route exact path="*" element={<h1>Nothing here</h1>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
