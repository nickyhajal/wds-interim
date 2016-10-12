import C from '~/constants';

export function updateQuantity(quantity) {
  return (dispatch) => {
    dispatch({
      type: C.SET_CHECKOUT_QUANTITY,
      quantity
    });
  };
}

export function updateStatus(status) {
  return (dispatch) => {
    dispatch({
      type: C.SET_CHECKOUT_STATUS,
      status
    });
  };
}

export function setCheckoutError(error) {
  return (dispatch) => {
    dispatch({
      type: C.SET_CHECKOUT_ERROR,
      error
    });
    setTimeout(() => {
      dispatch({
        type: C.SET_CHECKOUT_ERROR,
        error: false
      });
    }, 10000)
  };
}
