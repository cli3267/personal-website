import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-4'>
      <div className='d-flex flex-row justify-content-end'>
        <div className='p-2'>
          <FaLinkedinIn
            size={30}
            onClick={() =>
              window.location.assign(
                'https://www.linkedin.com/in/christina-li-906378172/',
              )
            }
          />
        </div>
        <div className='p-2'>
          <FaGithub
            size={30}
            color='white'
            onClick={() => window.location.assign('https://github.com/cli3267')}
          />
        </div>
        <div className='p-2'>
          <FaFacebookF
            size={30}
            color='white'
            onClick={() =>
              window.location.assign(
                'https://www.facebook.com/christina.li.1293',
              )
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
