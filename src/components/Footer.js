import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ color: 'white' }}>
      <Navbar
        style={{ width: '5%' }}
        className='justify-content-end'
        expand='lg'
        bg='dark'
        variant='dark'
        fixed='bottom'
      >
        <Nav justify className='flex-column'>
          <div
            className='mt-3'
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/christina-li-906378172/',
              );
            }}
          >
            <FaLinkedinIn size={24} />
          </div>
          <div
            className='mt-3'
            onClick={() => {
              window.open('https://github.com/cli3267');
            }}
          >
            <FaGithub size={24} />
          </div>
          <div
            className='mt-3'
            onClick={() => {
              window.open('https://www.facebook.com/christina.li.1293');
            }}
          >
            <FaFacebookF size={24} />
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
