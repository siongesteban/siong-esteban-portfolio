import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ title, is404 }) => (
  <Helmet>
    <title>
      {title ? (
        `${title} ${(!is404 ? ' - Siong Esteban' : '')}`
      ) : (
        'Siong Esteban'
      )}
    </title>
  </Helmet>
)