import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import App from './App';
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';
import { ALREADY_LOGIN } from './modules/login';

if (sessionStorage.getItem('bearerToken')) {
  try {
    const parsed = jwtDecode(sessionStorage.getItem('bearerToken'));
    store.dispatch({
      type: ALREADY_LOGIN,
      payload: {
        username: parsed.username,
      },
    });
    axios.defaults.headers = {
      Authorization: `Bearer ${sessionStorage.getItem('bearerToken')}`,
    };
  } catch (err) {
    console.error(err);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/admin">
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
