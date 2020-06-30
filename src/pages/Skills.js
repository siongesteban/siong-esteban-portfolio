import React from 'react';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';

import skills from '../data/skills';

import '../styles/components/skills.scss';

export default () => {
  const mySkills = skills.map(({ role, groups: skillGroups }) => (
    <div key={role} className="skills">
      <h3 className="skills__header">{role}</h3>
      {skillGroups.map((skillGroup, i) => (
        <div key={i} className="skills__container">
          {skillGroup.map(skill => (
            <div key={skill} className="skills__item">
              {skill}
            </div>
          ))}
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      <PageTitle title="Skills" />
      <Helmet>
        <meta
          name="description"
          content="Siong Esteban has built full-stack web applications with different technology stacks. From traditional web apps, Siong has moved on to building Single-Page apps and implementing RESTful APIs using the MERN stack."
        />
      </Helmet>
      <Container col={10} transparent>
        {mySkills}
      </Container>
    </div>
  );
};
