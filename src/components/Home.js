import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const items = ['a Student', 'an Athlete', 'an aspiring Software Engineer'];

const Home = () => (
  <div
    style={{
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>Hi! My name is Christina Li,</h1>
      <h4 className='text-muted'>
        I am <ReactRotatingText items={items} />
      </h4>
    </div>
  </div>
);

export default Home;
