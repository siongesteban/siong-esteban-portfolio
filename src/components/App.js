import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Skills from '../pages/Skills';
import NotACoder from '../pages/NotACoder';

export default () => (
  <div className="site">
    <div className="content">
      <Header />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/skills" component={Skills} />
        <Route path="/not-a-coder" component={NotACoder} />
      </Switch>
      <div className="push"></div>
    </div>
    <Footer />
  </div>
);