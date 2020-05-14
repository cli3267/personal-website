import React from 'react';
import Card from 'react-bootstrap/Card';

const Experience = props => {
  console.log(props.company);
  return (
    <Card>
      <Card.Header as='h3'>{props.company}</Card.Header>
      <Card.Body>
        <Card.Title>{props.position}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Experience;
