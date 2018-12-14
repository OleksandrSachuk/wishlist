import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from '../modules/registartion/reducers';
import signUpEpic from '../modules/registartion/epics';

const rootReducer = combineReducers({
  user,
});

const rootEpic = combineEpics(
  signUpEpic,
);

export default function configureStore(preloadedState) {

  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
