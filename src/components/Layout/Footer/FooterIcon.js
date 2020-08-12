import React, { useState } from 'react';

const FooterIcon = props => {
  const { redirectLink, Icon } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => window.open(redirectLink)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ marginTop: 15, padding: 10 }}
    >
      <Icon size={24} style={{ color: hovered ? '#9BD1FA' : 'white' }} />
    </div>
  );
};

export default FooterIcon;
