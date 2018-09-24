import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import './stylesheets/application.scss'
import Splash from './views/splashPage'
import MainPage from './views/mainPage'
import CategoryPage from './views/categoryPage'
import ProductPage from './views/productPage'
import store from './store'


const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history} >
      <Route path={process.env.PUBLIC_URL + '/'} component={Splash} />
      <Route path={process.env.PUBLIC_URL + '/verkkokauppa'} component={MainPage}/>
      <Route path={process.env.PUBLIC_URL + '/verkkokauppa/:category'} component={CategoryPage}/>
      <Route path={process.env.PUBLIC_URL + '/verkkokauppa/:category/:item'} component={ProductPage}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)



