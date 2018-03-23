import React from 'react';
import Routes from 'lite-re-router/Routes';
import Router from 'lite-re-router/Router';

import routes from './routes';

const Route = () => {
  return <Router render={() => <Routes routes={() => routes} />} />;
}

export default Route;
