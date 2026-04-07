import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Certifications from './components/Certifications';
import Process from './components/Process';
import Quality from './components/Quality';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Certifications />
        <Process />
        <Quality />
      </main>
      <Footer />
    </div>
  );
}

export default App;
