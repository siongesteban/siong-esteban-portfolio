import React from 'react';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';

export default () => (
  <div>
    <PageTitle />
    <Container col={8} elevated>
      <p>
        Hi. I&apos;m <strong>Siong Esteban</strong>, a Full Stack Developer from
        Philippines, experienced in designing and building scalable Single-Page
        Applications and RESTful APIs with React and Node.js, written in
        TypeScript.
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
    </Container>
  </div>
);
