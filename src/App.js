import React from 'react';
import Nav from './components/Nav';

import Home from './components/Home';
import Experience from './components/Experience';
const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <section>
          <Home />
        </section>
        <section>
          <h1 className='text-center'>Experience:</h1>
          <Experience
            company='Arthena'
            position='Software Engineer Intern'
            long='5/2019-12/2019'
          />
          <Experience
            company='Arthena'
            position='Software Engineer Intern'
            long='5/2019-12/2019'
          />
          <Experience
            company='Arthena'
            position='Software Engineer Intern'
            long='5/2019-12/2019'
          />
          <Experience
            company='Arthena'
            position='Software Engineer Intern'
            long='5/2019-12/2019'
          />
          <Experience
            company='Arthena'
            position='Software Engineer Intern'
            long='5/2019-12/2019'
          />
        </section>
      </main>
    </div>
  );
};

export default App;
