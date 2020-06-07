import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const items = ['a Student', 'an Athlete', 'an aspiring Software Engineer'];

const Home = () => (
  <div
    className='d-flex align-items-center text-white bg-dark'
    style={{ height: '80vh' }}
  >
    <div className='container'>
      <div className='row justify-content-center'>
        <h1 className='font-weight-bold'>Hi! My name is Christina Li,</h1>
      </div>
      <div className='row justify-content-center'>
        <h4 className='text-muted'>
          I am <ReactRotatingText items={items} />
        </h4>
      </div>
    </div>
  </div>
);

export default Home;
