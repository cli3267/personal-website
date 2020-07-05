import React from 'react';

import NavigationLabel from './NavigationLabel';

const navButtons = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Experience', link: '/experience' },
  { name: 'Contant', link: '/contact' },
  { name: 'Resume' },
];

const Navigation = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
      <div
        style={{
          display: 'flex',
          padding: 10,
          justifyContent: 'flex-start',
          width: '15%',
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
          <NavigationLabel key={i} nav={nav} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
