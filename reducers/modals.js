import C from '~/constants';
import { Map } from 'immutable';

export default function tasks(state = false, action) {
  switch (action.type) {
    case C.SET_MODAL_OPEN:
      return state.withMutations((ctx) =>
        ctx
        .set('open', action.modal)
        .set('visibility', 'unhide')
      );
    case C.SET_MODAL_CLOSED: {
      return state.withMutations((ctx) =>
        ctx
        .set('open', false)
        .set('visibility', 'hiding')
      );
    }
    case C.SET_MODAL_VISIBILITY: {
      return state.set('visibility', action.visibility);
    }
    default:
      return state;
  }
}
