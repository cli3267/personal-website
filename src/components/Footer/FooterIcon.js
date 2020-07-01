import React, { useState } from 'react';

const FooterIcon = props => {
  const { redirectLink, Icon, key } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={key}
      className='mt-5'
      onClick={() => window.open(redirectLink)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={24} style={{ color: hovered ? '#9BD1FA' : 'white' }} />
    </div>
  );
};

export default FooterIcon;
