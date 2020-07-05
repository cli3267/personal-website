import React from 'react';

const Contact = () => {
  return (
    <div
      // className='text-center'
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='justify-content-center' style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>Want to Collab ?</h1>
        <p>
          I am always looking for new opportunities and projects to grow as a
          software engineer!
        </p>
        <a href='mailto:cli3267@gmail.com'>Email Me !</a>
      </div>
    </div>
  );
};

export default Contact;
