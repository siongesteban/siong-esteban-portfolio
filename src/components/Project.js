import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
//
import '../styles/components/project.scss';
import '../styles/components/button.scss';

export default ({ image, title, description, techs, link }) => (
  <div className="project row">
    <div className="col-lg-8">
      <img className="project__image" src={image} alt={title} />
    </div>
    <div className="col-lg-4">
      <h2 className="project__title">{title}</h2>
      <p>{description}</p>
      <div className="project__tech-container">
        {techs.map(tech => (
          <span key={tech} className="project__tech-item">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <div className="project__button-container">
          {link.github && (
            <a
              className="button--blue"
              href={link.github}
              rel="noopener noreferrer"
              target="_new"
            >
              <FontAwesomeIcon icon={faCode} size="lg" />
              Code
            </a>
          )}
          {link.demo && (
            <a
              className="button--red"
              href={link.demo}
              rel="noopener noreferrer"
              target="_new"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);
