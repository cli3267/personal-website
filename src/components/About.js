import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const About = () => {
  const public_folder = process.env.PUBLIC_URL;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="align-items-center">
        <h1 className="text-center" style={{ color: 'white' }}>
          About
        </h1>
        <br />
        <Container>
          <Row className="justify-content-center">
            <Col sm={4}>
              <Image
                className="float-right"
                src="/images/me.jpg"
                alt="Christina Li"
              />
            </Col>
            <Col sm={7} style={{ fontSize: '18px' }}>
              <p>
                Christina is a 4/4.5 Computer Science major who will be
                completing her Bachelors degree in Spring of 2021 and her
                Master's degree in Computer Science in the Fall of 2021. She is
                originally from Southern California and she loves to play
                basketball, checking out new food spots, and coding ! She has
                played basketball for the past 9 years and is currently the
                point guard on the Stevens Women's Basketball team. Through
                basketball, she has learned the importance of leadership,
                teamwork, time-management and communication.
              </p>
              <br />
              <p>
                Outside of basketball, Christina balances her time between
                studying, working as a CA, and as a part time software
                engineering intern at Furey. She is currently a Course Assistant
                for CS 546 (Web Programming I). She has also been a Course
                Assistant for CS 135 (Discrete Structures) and CS 590
                (Algorithms).
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
