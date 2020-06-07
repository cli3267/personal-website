import React, { useState, useEffect } from 'react';

import Spinner from 'react-bootstrap/Spinner';

import Navigation from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="d-flex align-items-center"
        >
          <div className="justify-content-center">
            <Spinner
              animation="border"
              variant="light"
              style={{ height: '75px', width: '75px' }}
            />
          </div>
        </div>
      ) : (
        <div>
          <Navigation />
          <main>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
