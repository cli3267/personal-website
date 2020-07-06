import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

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
  {
    name: 'Instagram',
    site: 'https://www.instagram.com/_chrischyna/',
    Icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <div>
      <Navbar
        expand='lg'
        variant='dark'
        fixed='bottom'
        style={{
          marginBottom: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Nav justify className='flex-column'>
          {externalLinks.map((link, i) => {
            const Icon = link.Icon;
            const redirectLink = link.site;
            return (
              <FooterIcon key={i} redirectLink={redirectLink} Icon={Icon} />
            );
          })}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
