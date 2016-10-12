import { List, Map, OrderedMap } from 'immutable';

export default {
  modals: Map({
    open: false,
    visibility: 'hidden'
  }),
  checkout: Map({
    quantity: 1,
    status: 'start',
    error: false
  }),
  auth: Map({
 		me: false,
 		confirmed: true,
    loggingIn: false,
    loginError: false,
    card: false,
    useExistingCard: false
  })
};
