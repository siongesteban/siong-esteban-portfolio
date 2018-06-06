import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from '../pages/About';
import Coding from '../pages/Coding';

export default () => (
  <div>
    <Header />

      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/coding" component={Coding} />
      </Switch>
  </div>
);