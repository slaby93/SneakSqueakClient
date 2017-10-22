import React from 'react'
import ReactDOM from 'react-dom'
import AsyncComponent from './reactUtils/AsyncComponent'
import store from './store'
import { Provider } from 'react-redux'
// https://medium.com/front-end-hacking/lazy-loading-with-react-and-webpack-2-8e9e586cf442
ReactDOM.render(<Provider store={store}>
  <AsyncComponent moduleProvider={() => import(/* webpackChunkName: "App" */'./routes/App')} />
</Provider>, document.getElementById('app'))
