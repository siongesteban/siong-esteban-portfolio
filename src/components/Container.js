import React from 'react';
import '../styles/components/page-container.scss';

export default ({ children, col, elevated, transparent }) => {
  const className = `${
    elevated ? 'page-container elevated' : 'page-container'
  }`;

  return (
    <div className="container">
      <div className="row justify-content-center">
        {!transparent ? (
          <div className={`${className} col-11 col-md-${col}`}>{children}</div>
        ) : (
          <div
            className={`${className} col-11 col-md-${col}`}
            style={{ background: 'transparent' }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
