import C from '~/constants';

export function updateAuth(me, confirmed) {
  return (dispatch) => {
    if (confirmed === undefined) {
      confirmed = true;
    }
    dispatch({
      type: C.SET_AUTH_ME,
      me,
      confirmed,
    });
  };
}

export function setResetStatus(status) {
  return (dispatch) => {
    dispatch({
      type: C.SET_RESET_STATUS,
      status,
    });
  };
}

export function setResetError(error) {
  return (dispatch) => {
    dispatch({
      type: C.SET_RESET_ERROR,
      error,
    });
  };
}

export function loginError(error) {
  return (dispatch) => {
    dispatch({
      type: C.SET_LOGIN_ERROR,
      error,
    });
  };
}

export function updateCard(card, existing) {
  return (dispatch) => {
    dispatch({
      type: C.SET_CARD,
      card,
      existing,
    });
  };
}

export function updateUseExistingCard(existing) {
  return (dispatch) => {
    dispatch({
      type: C.SET_USE_EXISTING_CARD,
      existing,
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

export function resetStatus(status) {
  return (dispatch) => {
    dispatch({
      type: C.SET_RESET_STATUS,
      status,
    });
  };
}

export function resetError(error) {
  return (dispatch) => {
    dispatch({
      type: C.SET_RESET_ERROR,
      error
    });
    setTimeout(() => {
      dispatch({
        type: C.SET_RESET_STATUS,
        status: 'start',
      });
    }, 6000);
  };
}

export function confirmAuth() {
  return (dispatch) => {
    dispatch({ type: C.CONFIRM_AUTH });
  };
}
