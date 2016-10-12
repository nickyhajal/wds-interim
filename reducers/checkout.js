import C from '~/constants';
import { Map } from 'immutable';

export default function checkout(state = Map, action) {
  switch (action.type) {
    case C.SET_CHECKOUT_STATUS:
      return state.set('status', action.status);
    case C.SET_CHECKOUT_QUANTITY:
      return state.set('quantity', action.quantity);
    case C.SET_CHECKOUT_ERROR:
      return state.withMutations((ctx) => {
	      ctx.set('error', action.error);
	      ctx.set('status', 'start');
      });
    default:
      return state;
  }
}
