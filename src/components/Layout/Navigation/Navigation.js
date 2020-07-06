import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';

import NavigationLabel from './NavigationLabel';

const navButtons = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Experience', link: '/experience' },
  { name: 'Contact', link: '/contact' },
  { name: 'Resume' },
];

const Navigation = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router]);

  return (
    <Navbar expand='lg' style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: 10,
          width: '20%',
          marginTop: 5,
        }}
      >
        <h3>Christina Li</h3>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {navButtons.map((nav, i) => (
          <NavigationLabel key={i} nav={nav} currentPage={currentPage} />
        ))}
      </div>
    </Navbar>
  );
};

export default Navigation;
