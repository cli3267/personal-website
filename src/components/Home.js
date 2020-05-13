import React from 'react';

const Home = () => {
  // const hello = "Hi, my name is Christina Li. I will be a 4/4 Computer Science major at Stevens Institute of Technology."
  return (
    <div className='d-flex align-items-center' style={{ height: '83vh' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='font-weight-bold'>Hi! My name is Christina Li,</h1>
        </div>
        <div className='row justify-content-center'>
          <h4 className='text-muted'>
            I will be a 4/4 Computer Science Major at Stevens Institute of
            Technology.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
