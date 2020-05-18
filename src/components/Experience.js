import React from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import CompanyExperience from './CompanyExperience';

const Experience = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='align-items-center'>
        <h1 className='text-center' style={{ color: 'white' }}>
          Experience
        </h1>
        <Tab.Container defaultActiveKey='current'>
          <br />
          <Row className='justify-content-center'>
            <Col sm={3}>
              <Nav className='flex-column' variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='current'>Furey</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='arthena'>Arthena</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='current'>
                  <CompanyExperience
                    role='Software Engineering Intern'
                    time='3/2020-Current'
                    languages='React, Material-UI, NextJS, Firebase, Jira, Bitbucket'
                    do={[
                      '1 of 2 contributors on the engineering team (Their second engineering hire)',
                      'Collaborate with the accounting team to discuss/implement new features',
                      'Develop UI components in React with a NextJS/Firebase backend',
                    ]}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey='arthena'>
                  <CompanyExperience
                    role='Software Engineering Intern'
                    time='5/2019-12/2019'
                    languages='React, Python, Postgres / SQL, Apollo, GraphQL, Asana, Git, Github, Kubernetes, Google Cloud'
                    do={[
                      'Devleloped UI comonents in React with a Apollo/GraphQL backend',
                      'Automate React integration tests with NodeJS, Puppeteer and Jest on CircleCi',
                      'Developed Web Scrapers using Axios, JSDom, and Sequelize',
                      'Colloborated with the operations team to triage data quality issues',
                      'Ran backfills on K8s cluster',
                    ]}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Experience;
