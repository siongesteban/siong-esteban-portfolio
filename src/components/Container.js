import React from 'react';
import '../styles/components/page-container.css';

export default ({ children }) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="page-container col-11 col-md-8">
        {children}
      </div>
    </div>
  </div>
)