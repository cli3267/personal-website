import React, { useState, useEffect } from 'react';

import Spinner from 'react-bootstrap/Spinner';

import About from './components/About';
import Home from './components/Home';

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000);
  // }, []);

  return (
    <div>
      {/* {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className='d-flex align-items-center'
        >
          <div className='justify-content-center'>
            <Spinner
              animation='border'
              variant='light'
              style={{ height: '75px', width: '75px' }}
            />
          </div>
        </div>
      ) : ( */}
        <div>
          <Home />        
        </div>
      {/* )} */}
    </div>
  );
};

export default App;
