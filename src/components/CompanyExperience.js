import React from 'react';

const CompanyExperience = props => {
  return (
    <div>
      <h4>{props.role}</h4>
      <p>{props.time}</p>
      <br></br>
      <p>{props.languages}</p>
      <ul>
        {props.do
          ? props.do.map(x => {
              return <li>{x}</li>;
            })
          : ''}
      </ul>
    </div>
  );
};

export default CompanyExperience;
