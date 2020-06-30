import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
// import NotACoder from '../pages/NotACoder';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';

export default () => (
  <Router>
    <div className="site">
      <div className="content">
        <Header />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          {/* <Route path="/not-a-coder" component={NotACoder} /> */}
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
