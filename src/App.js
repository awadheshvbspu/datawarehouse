import React from 'react'
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Copyright from './components/Copyright';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import NavMobile from './components/NavMobile';
import Aos from 'aos';
import 'aos/dist/aos.css'



function App() {
  Aos.init({
    duration: 1800,
    offset :0,
  })
  return (
    <>
    <div className='overflow-hidden'>
    <Hero/>
    <About/>
    <Features/>
    <Testimonials/>
    <CtaSection/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
