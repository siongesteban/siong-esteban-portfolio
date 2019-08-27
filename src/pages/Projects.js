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
      {/* <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="project__intro">
              Here are some of my past projects that I built including one from
              my previous internship.
            </p>
          </div>
        </div> */}
      {projects.map(({ title, image, description, techs, link }) => (
        <Container key={title} col={12} elevated>
          <Project
            image={image}
            title={title}
            description={description}
            techs={techs}
            link={link}
          />
        </Container>
      ))}
    </div>
  );
};
