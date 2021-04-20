import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RegisterForm from './pages/RegisterForm';
import Main from './pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/register_company" exact component={RegisterForm} />
      <Route path="/register_company/:id" exact component={RegisterForm} />
    </Switch>
  );
};

export default Routes;
