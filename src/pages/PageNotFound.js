import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

export default () => (
  <div>
    <PageTitle title=":'(" is404={true} />
    <p style={{ textAlign: 'center' }}>Looks like you're lost. Let me take you to the <Link to ="/"><strong>right direction</strong></Link> :).</p>
  </div>
);