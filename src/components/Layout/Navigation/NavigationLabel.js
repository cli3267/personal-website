import React, { useState } from 'react';
import Link from 'next/link';

const NavigationLabel = props => {
  const { nav, currentPage } = props;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        fontSize: 24,
        padding: 5,
        marginRight: 15,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {nav.link ? (
        <Link href={nav.link}>
          <a style={{ color: currentPage === nav.link ? '#9BD1FA' : 'white' }}>
            {nav.name}
          </a>
        </Link>
      ) : (
        <a
          href={'/documents/Christina_Li_Resume.pdf'}
          target='_blank'
          style={{ border: '1px solid', padding: '5px', color: 'white' }}
        >
          {nav.name}
        </a>
      )}
    </div>
  );
};

export default NavigationLabel;
