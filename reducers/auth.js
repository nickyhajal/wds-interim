import C from '~/constants';
import { Map } from 'immutable';

export default function auth(state = Map, action) {
  switch (action.type) {
    case C.LOGIN:
      action.auth.logging_in = false;
      action.auth.authd = true;
      return Map(action.auth);
    case C.LOGOUT:
      return Map({ authd: false, logging_in: false });
    case C.ATTEMPT_LOGIN:
      return Map({ logging_in: true });
    default:
      return state;
  }
}
