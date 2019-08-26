import React from 'react';
import { Helmet } from 'react-helmet';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import Project from '../components/Project';

import skills from '../data/skills';
import projects from '../data/projects';

import '../styles/components/skills.scss';

export default () => {
  const mySkills = skills.map(({ role, groups }) => (
    <div key={role} className="skills">
      <h3 className="skills__header">{role}</h3>
      {groups.map(({ line, items }) => (
        <div key={line} className="skills__container">
          {items.map(item => (
            <div key={item} className="skills__item">
              {item}
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
      <Container col={12}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="project__intro">
              Here are some of my past projects that I built including one from
              my previous internship.
            </p>
          </div>
        </div>
        {projects.map(project => (
          <Project
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            techs={project.techs}
            link={project.link}
          />
        ))}
      </Container>
    </div>
  );
};
