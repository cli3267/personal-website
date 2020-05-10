import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='App'>
      <div className='bg-dark text-white' style={{ height: '100vh' }}>
        <Nav />
        <Footer />
      </div>
    </div>
  );
};

export default App;
