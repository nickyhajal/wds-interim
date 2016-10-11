import C from '~/constants';

export function updateAuth(me) {
  return (dispatch) => {
    dispatch({
      type: C.AUTH_UPDATE,
      me
    });
    fire.onAuth((authData) => {
      if (authData) {
      } else {
        dispatch({ type: C.LOGOUT });
      }
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
export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: C.LOGOUT });
    fire.unauth();
  };
}
