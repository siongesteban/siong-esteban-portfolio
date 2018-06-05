import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Index from '../pages/Index';

export default () => (
  <div>
    <Header />

      <Switch>
        <Route path="/" component={Index} exact />
      </Switch>
  </div>
);