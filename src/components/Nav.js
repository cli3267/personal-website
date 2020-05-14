import React, { useState } from 'react';
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';

const Nav = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark text-white '>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' style={{ fontSize: '24px' }}>
              Christina Li
            </a>
          </div>
          <div className='nav navbar-right'>
            <div className='p-3'>
              <FaLinkedinIn
                size={24}
                onClick={() =>
                  window.location.assign(
                    'https://www.linkedin.com/in/christina-li-906378172/',
                  )
                }
              />
            </div>
            <div className='p-3'>
              <FaGithub
                size={24}
                color='white'
                onClick={() =>
                  window.location.assign('https://github.com/cli3267')
                }
              />
            </div>
            <div className='p-3'>
              <FaFacebookF
                size={24}
                color='white'
                onClick={() =>
                  window.location.assign(
                    'https://www.facebook.com/christina.li.1293',
                  )
                }
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
