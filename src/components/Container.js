import React from 'react';
import '../styles/components/page-container.scss';

export default ({ children, col, transparent }) => (
  <div className="container">
    <div className="row justify-content-center">
      {!transparent ? (
        <div className={`page-container col-11 col-md-${col}`}>{children}</div>
      ) : (
        <div
          className={`page-container col-11 col-md-${col}`}
          style={{ background: 'transparent' }}
        >
          {children}
        </div>
      )}
    </div>
  </div>
);
