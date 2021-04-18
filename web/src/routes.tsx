import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Companies from './pages/Companies';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/companies" exact component={Companies} />
    </Switch>
  );
};

export default Routes;
