import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Picture from './components/Picture/Picture';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import lax from 'lax.js';

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

function App() {
  return (
    <div className="App">
    <Navbar />
    <Picture />
    <Projects />
    <Contact />
    <Footer />
    </div>
    );
}


export default App;
