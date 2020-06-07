import React from 'react';

const CompanyExperience = (props) => (
  <div>
    <h4>{props.role}</h4>
    <p>{props.time}</p>
    <br />
    <p>{props.languages}</p>
    {props.do
      ? (
        <ul>
          {' '}
          {props.do.map((x) => (<li key={x}>{x}</li>))}
          {' '}
        </ul>
      )
      : null}
  </div>
);

export default CompanyExperience;
