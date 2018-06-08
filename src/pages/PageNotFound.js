import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <p style={{ textAlign: 'center' }}>Looks like you're lost. Let me take you to the <Link to ="/"><strong>right direction</strong></Link> :).</p>
  </div>
);