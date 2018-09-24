
import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'
import { routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer, 
    }),composeWithDevTools(
        // other store enhancers if any
      )
  )

  export default store