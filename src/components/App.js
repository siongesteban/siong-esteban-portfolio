import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '../pages/Index';
import 'normalize.css/normalize.css';

export default () => (
  <Router>
    <Route path="/" component={Index} exact />
  </Router>
);