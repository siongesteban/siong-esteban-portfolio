import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Index from '../pages/Index';
import Coding from '../pages/Coding';

export default () => (
  <div>
    <Header />

      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/coding" component={Coding} />
      </Switch>
  </div>
);