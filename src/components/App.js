import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Skills from '../pages/Skills';

export default () => (
  <div className="site">
    <div className="content">
      <Header />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/skills" component={Skills} />
      </Switch>
      <div className="push"></div>
    </div>
    <Footer />
  </div>
);