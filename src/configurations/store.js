import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

import config from './config';
import logger from './logger';
import templateEpic from '../modules/module1/epics';

const isDevelopment = process.env.NODE_ENV === 'development';
const isEnableLogs = config.enable_logs;
const isEnableDevtools = config.enable_devtools;
const isEnableUpdateAnalytics = config.enable_update_analytics;

const rootEpic = combineEpics(templateEpic);

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
  let composedEnhancers = compose;

  if (isDevelopment && isEnableDevtools) {
    /* eslint-disable global-require */
    const { composeWithDevTools } = require('redux-devtools-extension');
    /* eslint-enable global-require */
    composedEnhancers = composeWithDevTools(...enhancers);
  }

  if (isDevelopment && isEnableUpdateAnalytics) {
    /* eslint-disable global-require */
    const { whyDidYouUpdate } = require('why-did-you-update');
    /* eslint-enable global-require */
    whyDidYouUpdate(React);
  }

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  );

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return { store, persistor, history };
}
