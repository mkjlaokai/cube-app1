import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from 'store';
import '@cube/cube-normalize-ui';
import 'style.css';
import { createRoutes } from 'routes';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

export const history = createHistory();
export const store = configureStore(history, {});
const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>{routes.map(r => <Route key={r.path} {...r} />)}</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
