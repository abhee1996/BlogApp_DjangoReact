import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , compose , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './Store/reducer/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store= createStore(reducer,composeEnhancers(
      applyMiddleware (thunk)
));

const app=(
    <Provider store={store}>
      <App/> 
    </Provider>
)



ReactDOM.render(
  app,document.getElementById('root')
);
serviceWorker.unregister();
