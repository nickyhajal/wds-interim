import C from '~/constants';

export function updateAuth(me, confirmed) {
  return (dispatch) => {
    if (confirmed === undefined) {
      confirmed = true;
    }
    dispatch({
      type: C.SET_AUTH_ME,
      me,
      confirmed
    });
  };
}

export function loginError(error) {
  return (dispatch) => {
    dispatch({
      type: C.SET_LOGIN_ERROR,
      error
    });
  };
}

export function updateCard(card, existing) {
  return (dispatch) => {
    dispatch({
      type: C.SET_CARD,
      card,
      existing
    });
  };
}

export function updateUseExistingCard(existing) {
  return (dispatch) => {
    dispatch({
      type: C.SET_USE_EXISTING_CARD,
      existing
    });
  };
}

export function attemptLogin() {
  return (dispatch) => {
    dispatch({
      type: C.ATTEMPT_LOGIN,
    });
  };
}

export function register(email, password) {
  return (dispatch) => {
    dispatch({ type: C.ATTEMPT_LOGIN });
    fire.authWithPassword({ email, password }, (error) => {
      if (error) {
        dispatch({ type: C.DISPLAY_ERROR, error: `Login failed! ${error}` });
        dispatch({ type: C.LOGOUT });
      }
    });
  };
}

export function confirmAuth() {
  return (dispatch) => {
    dispatch({ type: C.CONFIRM_AUTH });
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: C.LOGOUT });
    fire.unauth();
  };
}
