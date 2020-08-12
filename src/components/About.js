import React from 'react';

const About = () => {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}>About</h1>
        <br />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src='images/me.jpg' alt='Christina Li' />
          <div
            style={{
              marginLeft: 50,
              fontSize: 18,
              width: '50%',
              color: '#9BD1FA',
            }}
          >
            <p>
              I am currently a 4/4.5 Computer Science Major at Stevens
              Institute of Technology. I will be completing my Bachelor's of
              Computer Science in the Spring of 2021 and my Master's in Computer
              Science in the Fall of 2021. At Stevens, I am currently a member
              of Sigma Delta Tau and the Women's Basketball team. I grew up in
              Southern California, go Lakers! In my spare time, I love to play
              basketball, check out new food spots, and learn new coding
              languages. My professional experience includes working as a Course
              Assistant and interning at 2 technology startups. I am currently a
              Course Assistant for CS 546 (Web Programming I) and have
              previously been a Course Assistant for CS 135 (Discrete
              Structures) and CS 590 (Algorithms). I currently work part-time at
              Feury (an accounting startup) and have worked at Arthena (an art
              investment startup) in the past. Feel free to reach out
              (cli3267@gmail.com) if you want to collaborate, I'd love to
              connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
