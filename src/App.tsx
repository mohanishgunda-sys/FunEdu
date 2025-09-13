import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentCards from './components/ContentCards';
import ScrollAnimation from './components/ScrollAnimation';
import Teachers from './components/Teachers';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FunSection from './components/FunSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });

      // Parallax effects
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      // Interactive people movement
      const people = document.querySelectorAll('.animated-person');
      people.forEach((person, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = Math.sin(window.pageYOffset * 0.001 + index) * 10;
        const xPos = Math.cos(window.pageYOffset * 0.001 + index) * 5;
        person.style.transform = `translate(${xPos}px, ${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentCards />
      <ScrollAnimation />
      <Teachers />
      <Stats />
      <Testimonials />
      <FunSection />
      <Footer />
    </div>
  );
}

export default App;