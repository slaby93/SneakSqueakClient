import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store/store';
import Router from './routes/router';
import './gloablStyles';
import { NODE_ENV, ENVIROMENTS } from './consts/environment';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('app'),
);
removeInitialLoader();

if (NODE_ENV === ENVIROMENTS.PRODUCTION && 'serviceWorker' in navigator) {
  installServiceWorker();
}

function removeInitialLoader() {
  document.getElementById('loader').remove();
}

function installServiceWorker() {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    } catch (err) {
      console.log('ServiceWorker registration failed: ', err);
    }
  });
}
