import React from 'react';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';

export default () => (
  <div>
    <PageTitle />
    <Container col={8} elevated>
      <p>
        Hi. I&apos;m <strong>Siong Esteban</strong> (<em> Jerico</em> is my real
        name), a Full Stack Developer from Philippines, with an experience in
        designing and building scalable Single-page applications and RESTful
        APIs using modern JavaScript and TypeScript.
      </p>
      <p>
        I&apos;ve been building full stack web applications using different
        technologies since college. From school projects to personal ones, the
        web was the only platform that I preferred using. Not only because you
        can quickly write and deploy your apps but also because of what
        JavaScript can do for the web.
      </p>
      <p>
        When I&apos;m not writing code, you can see me making myself busy in{' '}
        <a
          className="light"
          href="https://instagr.am/siong.esteban"
          rel="noopener noreferrer"
          target="_new"
        >
          photography
        </a>{' '}
        and{' '}
        <a
          className="light"
          href="https://vimeo.com/scaesfilms"
          rel="noopener noreferrer"
          target="_new"
        >
          filmmaking
        </a>
        .
      </p>
      <p>
        Btw, I&apos;m currently on a job hunt, looking for a remote work. So if
        you&apos;re someone in need of a developer, go through my portfolio or
        just download my{' '}
        <a
          className="light"
          href="https://drive.google.com/file/d/1-ohjOpXQ_mcjbBP5oEW6cSh8onYiNQHp/view"
          rel="noopener noreferrer"
          target="_new"
          title="Download Resume"
        >
          resume
        </a>{' '}
        and let&apos;s see if I&apos;m the one you need.
      </p>
    </Container>
  </div>
);
