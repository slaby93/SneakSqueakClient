import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import Authorize from './Authorize';
import Dashboard from './Dashboard';
import GlobalWrapper from './GlobalWrapper';

export default () => {
  return (
    <Router>
      <GlobalWrapper>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/authorize" component={Authorize} />
        </Switch>
      </GlobalWrapper>
    </Router>
  );
};
