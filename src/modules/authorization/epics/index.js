import {combineEpics} from 'redux-observable';
import authorizationGoogleEpic from './authorizationGoogleEpic';

export default combineEpics(authorizationGoogleEpic);
