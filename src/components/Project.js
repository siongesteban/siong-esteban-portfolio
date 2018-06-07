import React from 'react';
import '../styles/components/project.css';
import '../styles/components/button.css';

export default ({ image, title, description, techs, link }) => (
  <div className="project row">
    <div className="col-lg-8">
      <img
        className="project__image"
        src={image}
        alt="Peer"
      />
    </div>
    <div className="col-lg-4">
      <h2 className="project__title">{title}</h2>
      <p>{description}</p>
      <div className="project__tech-container">
        {techs.map((tech) => (
          <span key={tech} className="project__tech-item">{tech}</span>
        ))}
      </div>
      {link && (
        <div className="project__button-container">
          {link.github && (
            <a
              className="button--blue"
              href={link.github}
              target="_new"
            >
              View on GitHub
            </a>
          )}
          {link.demo && (
            <a
              className="button--red"
              href={link.demo}
              target="_new"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  </div>
)