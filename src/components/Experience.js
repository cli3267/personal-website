import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaReact } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const workExperiences = [
  {
    company: 'Furey',
    location: 'Hoboken, NJ',
    jobTitle: 'Software Engineering Intern',
    languages: [
      'React',
      'Material-UI',
      'NextJS',
      'Firebase',
      'Jira',
      'Bitbucket',
    ],
    do: [
      'Collaborate with the accounting team to discuss/implement new features',
      'Develop UI components in React with a NextJS/Firebase backend',
    ],
  },
  {
    company: 'Arthena',
    location: 'Soho, NY',
    jobTitle: 'Software Engineering Intern',
    languages: [
      'React',
      'Python',
      'Postgres / SQL',
      'GraphQL',
      'Apollo',
      'Asana',
      'Github',
      'Kubernetes',
      'Google Cloud',
    ],
    do: [
      'Developed UI components in React with a Apollo/GraphQL backend',
      'Automated React integration tests with NodeJS, Puppeteer and Jest on CircleCi',
      'Developed web Scrapers using Axios, JSDom, Puppeteer, and Sequelize',
      'Collaborated with the operations team to triage data quality issues',
      'Deployed web scrapers as kubernetes jobs',
    ],
  },
  {
    company: 'Stevens CS Department',
    location: 'Hoboken, NJ',
    jobTitle: 'Course Assistant',
    classes:
      'CS 135 (Discrete Structures), CS590 (Algorithms), CS 546 (Web Programming I)',
    do: [
      'Host office hours to help students learn one-on-one or in small groups',
      'Update labs and grading scripts',
      'Provide feedback on students’ homework and tests to help improve their knowledge',
    ],
  },
];

const Experience = () => (
  <div
    style={{
      alignItems: 'center',
    }}
  >
    <div>
      <h1 className='text-center' style={{ color: 'white' }}>
        Experience
      </h1>
      <VerticalTimeline>
        {workExperiences.map(experience => (
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={experience.languages ? <FaReact /> : <FaBriefcase />}
          >
            <div style={{ color: 'black' }}>
              {experience.languages
                ? experience.languages.map(lang => (
                    <Button
                      style={{ margin: 5 }}
                      variant='outline-dark'
                      disabled
                    >
                      {lang}
                    </Button>
                  ))
                : null}
              <h3 style={{ marginTop: 5 }}>{experience.jobTitle}</h3>
              <h4>{experience.company + ' - ' + experience.location}</h4>
              <p>{experience.classes}</p>
              {experience.do ? (
                <ul>
                  {experience.do.map(x => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </div>
);

export default Experience;
