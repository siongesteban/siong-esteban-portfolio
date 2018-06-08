import React from 'react';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import Project from '../components/Project';
import projects from '../data/projects';
import '../styles/components/skills.css';

export default () => (
  <div>
    <PageTitle title="Skills" />
    <Container col={10} transparent={true}>
      <div className="skills">
        <h3 className="skills__header">Front End</h3>
        <div className="skills__container">
          <div className="skills__item">React</div>
          <div className="skills__item">Redux</div>
        </div>
        <div className="skills__container">
          <div className="skills__item">Material UI</div>
          <div className="skills__item">Semantic UI</div>
          <div className="skills__item">Bootstrap</div>
        </div>
        <div className="skills__container">
          <div className="skills__item">jQuery</div>
        </div>
      </div>
      <div className="skills">
        <h3 className="skills__header">Back End</h3>
        <div className="skills__container">
          <div className="skills__item">Node.js</div>
          <div className="skills__item">Express</div>
        </div>
        <div className="skills__container">
          <div className="skills__item">MongoDB</div>
          <div className="skills__item">Firebase</div>
          <div className="skills__item">Laravel</div>
        </div>
        <div className="skills__container">
          <div className="skills__item">CodeIgniter</div>
          <div className="skills__item">MySQL</div>
        </div>
      </div>
    </Container>
    <Container col={12}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="project__intro">
            Here are some of the projects that I worked on during my college including one from my previous internship.
          </p>
        </div>
      </div>
      {projects.map((project) => (
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
)