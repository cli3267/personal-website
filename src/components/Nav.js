import React from 'react';
import Link from 'next/link';

const navButtons = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Experience', link: '/experience' },
];

const Navigation = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          padding: 10,
          justifyContent: 'flex-start',
          width: '15%',
          marginTop: 5,
        }}
      >
        <h4 style={{ color: 'white' }}>CHRISTINA LI</h4>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {navButtons.map((nav, i) => {
          return (
            <div
              key={i}
              style={{
                color: 'white',
                fontSize: '24px',
                padding: 5,
                marginRight: 10,
              }}
            >
              <Link href={`${nav.link}`}>
                <a>{nav.name}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
