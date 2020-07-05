import React, { useState } from 'react';

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', width: '50%' }}>
        <h1 style={{ color: 'white' }}>
          Want to Collaborate on an Idea or want to Chat ?
        </h1>
        <p>
          I am always looking for new opportunities and projects to grow as a
          software engineer!
        </p>
        <br />
        <a
          href='mailto:cli3267@gmail.com'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontSize: 28,
            border: '1px solid',
            padding: '10px',
            color: hovered ? 'black' : 'white',
            backgroundColor: hovered ? '#9BD1FA' : null,
          }}
        >
          Email Me!
        </a>
      </div>
    </div>
  );
};

export default Contact;
