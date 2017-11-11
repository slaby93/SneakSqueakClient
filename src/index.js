import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, {history} from './store/store'
import Router from './routes/router'
import './gloablStyles'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Router />
    </ConnectedRouter>
  </Provider>
, document.getElementById('app'))

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    } catch (err) {
      console.log('ServiceWorker registration failed: ', err)
    }
  })
}
