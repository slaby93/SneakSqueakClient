import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import Authorize from './Authorize';
import Dashboard from './Dashboard';
import GlobalWrapper from './GlobalWrapper';
import ProtectedRoute from './ProtectedRoute';

export default () => {
  return (
    <GlobalWrapper>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/authorize" component={Authorize} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </GlobalWrapper>
  );
};
