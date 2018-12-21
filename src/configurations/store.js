import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import authorizationEpics from 'modules/authorization/epics';

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {composeWithDevTools} from 'redux-devtools-extension';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {whyDidYouUpdate} from 'why-did-you-update';

import createRootReducer from './reducers';
import {
  isDevelopment,
  isEnableLogs,
  isEnableDevtools,
  isEnableUpdateAnalytics
} from './utils';
import logger from './logger';

const rootEpic = combineEpics(authorizationEpics);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const epicMiddleware = createEpicMiddleware();

  const middlewares = [routerMiddleware(history), thunk, epicMiddleware];

  if (isDevelopment && isEnableLogs) {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  let composedEnhancers;

  if (isDevelopment && isEnableDevtools) {
    composedEnhancers = composeWithDevTools(...enhancers);
  } else {
    composedEnhancers = compose(...enhancers);
  }

  if (isDevelopment && isEnableUpdateAnalytics) {
    whyDidYouUpdate(React);
  }

  if (isDevelopment) {
    /* eslint-disable global-require */
    /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
    const axe = require('react-axe');
    /* eslint-enable global-require */
    axe(React, ReactDOM, 1000);
  }

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return {
    store,
    persistor,
    history
  };
}
