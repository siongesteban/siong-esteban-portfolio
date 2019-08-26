import React from 'react';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import Project from '../components/Project';

import projects from '../data/projects';

import '../styles/components/skills.scss';

export default () => {
  return (
    <div>
      <PageTitle title="Projects" />
      <Container col={12} elevated>
        {/* <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="project__intro">
              Here are some of my past projects that I built including one from
              my previous internship.
            </p>
          </div>
        </div> */}
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
