import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Router from './routes/router'

ReactDOM.render(<Provider store={store}>
  <Router />
</Provider>, document.getElementById('app'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/serviceworker.js')
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    } catch (err) {
      console.log('ServiceWorker registration failed: ', err)
    }
  })
}
