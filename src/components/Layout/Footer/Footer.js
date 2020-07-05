import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';

import FooterIcon from './FooterIcon';

const externalLinks = [
  {
    name: 'LinkedIn',
    site: 'https://www.linkedin.com/in/christina-li-906378172/',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Github',
    site: 'https://github.com/cli3267',
    Icon: FaGithub,
  },
  {
    name: 'Facebook',
    site: 'https://www.facebook.com/christina.li.1293',
    Icon: FaFacebookF,
  },
];

const Footer = () => {
  return (
    <div>
      <Navbar
        className='justify-content-end'
        expand='lg'
        variant='dark'
        fixed='bottom'
        style={{ marginBottom: '25px' }}
      >
        <Nav justify className='flex-column'>
          {externalLinks.map((link, i) => {
            const Icon = link.Icon;
            const redirectLink = link.site;
            return (
              <FooterIcon redirectLink={redirectLink} Icon={Icon} key={i} />
            );
          })}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
