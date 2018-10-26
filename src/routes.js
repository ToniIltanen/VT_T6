import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import store from './store'
import Splash from './views/splashPage'
import MainPage from './views/mainPage'
import CategoryPage from './views/categoryPage'
import ProductPage from './views/productPage'
import PurchasePage from './views/purchasePage';

const history = syncHistoryWithStore(browserHistory, store)
const Routes = <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history} >
    <Route path={process.env.PUBLIC_URL + '/'} component={Splash} />
    <Route path={process.env.PUBLIC_URL + '/verkkokauppa'} component={MainPage}/>
    <Route path={process.env.PUBLIC_URL + '/verkkokauppa/ostoskori'} component={PurchasePage}/>
    <Route path={process.env.PUBLIC_URL + '/verkkokauppa/:category'} component={CategoryPage}/>
    <Route path={process.env.PUBLIC_URL + '/verkkokauppa/:category/:item'} component={ProductPage}/>
    </Router>
    </Provider>

export default Routes