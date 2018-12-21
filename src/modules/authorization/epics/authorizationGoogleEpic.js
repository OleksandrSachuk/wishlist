import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {catchError, mapTo, startWith, switchMap} from 'rxjs/operators';

import {firebaseLoginGoogle} from 'firebaseConfig/utils';

import {
  AUTHORIZATION_GOOGLE_PRESS_BUTTON,
  AUTHORIZATION_GOOGLE
} from '../actions/constatnts';

export default (action$) =>
  action$.pipe(
    ofType(AUTHORIZATION_GOOGLE_PRESS_BUTTON),
    switchMap(() =>
      from(firebaseLoginGoogle()).pipe(
        mapTo({type: AUTHORIZATION_GOOGLE.success}),
        catchError((error) => of({type: AUTHORIZATION_GOOGLE.failure, error})),
        startWith({type: AUTHORIZATION_GOOGLE.pending})
      )
    )
  );
