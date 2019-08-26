import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import networkLinks from '../data/networkLinks';
import '../styles/components/footer.css';

export default () => (
  <footer className="footer">
    <p className="footer__quote">
      &quot;I just copied and pasted a CSS for this sticky footer.&quot; &mdash;{' '}
      <span className="footer__quote-name">Siong Esteban</span>
    </p>
    <div className="footer__separator" />
    <div className="footer__icons-container">
      {networkLinks.map(link => (
        <a
          key={link.name}
          className={`footer__icon-link ${link.name}`}
          href={link.url}
          target="_new"
        >
          <FontAwesomeIcon
            className="footer__icon"
            icon={link.icon}
            size="lg"
          />
        </a>
      ))}
    </div>
    <p className="footer__copyright">
      &copy; {new Date().getFullYear()} Siong Esteban
    </p>
  </footer>
);
