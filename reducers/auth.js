import C from '~/constants';
import { Map } from 'immutable';

export default function auth(state = Map, action) {
  switch (action.type) {
    case C.SET_AUTH_ME:
      return state.withMutations((ctx) => {
        ctx.set('me', action.me);
        ctx.set('confirmed', action.confirmed);
        ctx.set('loginError', false);
        ctx.set('loggingIn', false);
        return ctx;
      });
    case C.SET_LOGIN_ERROR:
      return state.withMutations((ctx) => {
        ctx.set('loginError', action.error);
        ctx.set('loggingIn', false);
        return ctx;
      });
    case C.SET_CARD:
      return state.withMutations((ctx) => {
        ctx.set('card', action.card);
        ctx.set('useExistingCard', action.existing);
        return ctx;
      });
    case C.SET_USE_EXISTING_CARD:
      return state.set('useExistingCard', action.existing);
    case C.LOGOUT:
      return state.withMutations((ctx) => {
        ctx.set('me', false);
        ctx.set('loginError', false);
        ctx.set('loggingIn', false);
        return ctx;
      });
    case C.ATTEMPT_LOGIN:
      return state.set('loggingIn', true);
    case C.SET_RESET_STATUS:
      return state.withMutations((ctx) => {
        ctx.set('resetStatus', action.status);
        ctx.set('resetError', false);
        return ctx;
      });
    case C.SET_RESET_ERROR:
      return state.withMutations((ctx) => {
        ctx.set('resetStatus', 'error');
        ctx.set('resetError', action.error);
        return ctx;
      });
    default:
      return state;
  }
}
