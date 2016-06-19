import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import RequireAuth from './components/auth/RequireAuth';
import { AUTH_USER } from './actions/types';

import App from './components/app';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Welcome from './components/Welcome';
import GitHub from './components/GitHub/GitHub';

import rootReducer from './reducers'
import DevTools from './components/DevTools'



export default function configureStore(initialState){
  const createStoreWithMiddleWare =  createStore(
        rootReducer,
        initialState,
          compose(
            applyMiddleware(reduxThunk),
            DevTools.instrument())
          )
    return createStoreWithMiddleWare;
  }

  const store = configureStore({});
  const token = localStorage.getItem('token');

  if(token){
    store.dispatch({ type: AUTH_USER });
  }


  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome}/>
          <Route path="signin" component={Signin}/>
          <Route path="signout" component={Signout}/>
          <Route path="signup" component={Signup}/>
          <Route path="feature" component={RequireAuth(Feature)} />
          <Route path="github" component={RequireAuth(GitHub)} />
        </Route>
      </Router>
    </Provider>
  , document.querySelector('.container'));
