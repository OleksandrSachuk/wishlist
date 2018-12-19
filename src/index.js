import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ErrorBoundary from 'modules/common/ErrorBoundary/ErrorBoundary';

import './index.css';
import Pages from './pages';
import * as serviceWorker from './serviceWorker';
import configureStore from './configurations/store';

const {store, persistor, history} = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <ErrorBoundary>
          <Pages history={history} />
        </ErrorBoundary>
      </StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
