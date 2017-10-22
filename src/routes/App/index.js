import React from 'react';
import AsyncComponent from './../../reactUtils/AsyncComponent'
export default ()=> <AsyncComponent moduleProvider={() => import(/* webpackChunkName: "App" */'./AppContainer')} />;