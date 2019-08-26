import React from 'react';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';

export default () => (
  <div>
    <PageTitle />
    <Container col={8}>
      <p>
        Hi, there. I&apos;m <strong>Siong Esteban</strong> (Jerico is my real
        name). I&apos;ve been building full-stack web applications with
        different technologies throughout my college years. And guess what, I
        just graduated! Now I&apos;m looking for a job as a developer where I
        can help build software solutions with the technology stack I&apos;m
        comfortable with and further enhance my skills.
      </p>
      <p>
        I&apos;m currenly living in the Philippines but also willing to work
        overseas :).
      </p>
      <p>
        When I&apos;m not coding, you can see me making myself busy with taking
        photographs. If it wasn&apos;t for Computer Science, maybe I chose
        photography as a career. I&apos;m also into filmmaking, btw.
      </p>
      <p>
        Previously, I had an internship where I worked as a web developer and
        built a full-stack web application to help the staffs to generate
        reports, manage and review data from different health facilities over
        the country.
      </p>
    </Container>
  </div>
);
