import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Picture from './components/Picture/Picture';
import Projects from './components/Projects/Projects';
import LowNavbar from './components/LowNavbar/LowNavbar';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Empty Site For Now</h1>
        </header>
        <div> 
        <Navbar />
        <Picture />
        <Projects /> 
        <Contact />
        <LowNavbar /> 
        </div>
    </div>
  );
}


export default App;
