import React from 'react';
import Image from 'react-bootstrap/Image';

const About = () => {
  let public_folder = process.env.PUBLIC_URL;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 className='text-center' style={{ color: 'white' }}>
        About
      </h1>
      <Image src={public_folder + 'images/me.jpg'} />
    </div>
  );
};

export default About;
