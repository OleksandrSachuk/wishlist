import createAsyncAction from 'shared/utils/createAsyncAction';

import createAction from '.';

export const AUTHORIZATION_GOOGLE_PRESS_BUTTON: any = createAction(
  'AUTHORIZATION_GOOGLE_PRESS_BUTTON'
);

export const AUTHORIZATION_GOOGLE = createAsyncAction(
  createAction('AUTHORIZATION_GOOGLE')
);
