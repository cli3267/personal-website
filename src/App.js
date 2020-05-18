import React from 'react';
import Navigation from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='experience'>
          <Experience />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
