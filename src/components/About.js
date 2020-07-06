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
              Christina is a 4/4.5 Computer Science major who will be completing
              her Bachelors degree in Spring of 2021 and her Master's degree in
              Computer Science in the Fall of 2021. She is originally from
              Southern California and she loves to play basketball, checking out
              new food spots, and coding ! She has played basketball for the
              past 9 years and is currently the point guard on the Stevens
              Women's Basketball team. Through basketball, she has learned the
              importance of leadership, teamwork, time-management and
              communication.
            </p>
            <br />
            <p>
              Outside of basketball, Christina balances her time between
              studying, working as a CA, and as a part time software engineering
              intern at Furey. She is currently a Course Assistant for CS 546
              (Web Programming I). She has also been a Course Assistant for CS
              135 (Discrete Structures) and CS 590 (Algorithms).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
