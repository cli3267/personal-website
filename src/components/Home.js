import React, { useState } from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  const [word, setWord] = useState('');

  const buildWord = item => {
    console.log(item);
    // for (let i = 0; i < item.length; i++) {
    //   setWord(word + item[i]);
    //   console.log(word);
    // }
  };

  const items = ['a Student', 'an Athlete', 'an Aspiring Software Engineer'];
  return (
    <div
      className='d-flex align-items-center text-white bg-dark'
      style={{ height: '100vh' }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='font-weight-bold'>Hi! My name is Christina Li,</h1>
        </div>
        <div className='row justify-content-center'>
          <h4 className='text-muted'>
            I am <ReactRotatingText items={items} />
            {/* {items.map(x => {
              buildWord(x);
            })} */}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
