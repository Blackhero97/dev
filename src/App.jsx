import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Lock scroll when mobile menu is open
    const body = document.body;
    const navMenu = document.querySelector('.fixed.left-0.top-0');
    if (navMenu && navMenu.offsetParent !== null) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => { body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
