import React from 'react';
import AsyncComponent from './../../reactUtils/AsyncComponent';

export default props => (<AsyncComponent
  {...props}
  moduleProvider={() => import(/* webpackChunkName: "Dashboard" */'./DashboardContainer')}
/>);
