import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from '../pages/About';
import Skills from '../pages/Skills';

export default () => (
  <div>
    <Header />

      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/skills" component={Skills} />
      </Switch>
  </div>
);