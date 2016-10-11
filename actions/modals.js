import C from '~/constants';

// Track listeners so we can remove them later
const listeners = {};


export function closeModal() {
  return (dispatch) => {
    dispatch({
      type: C.SET_MODAL_CLOSED
    });
  };
}

export function openModal(modal) {
  return (dispatch) => {
    dispatch({
      type: C.SET_MODAL_OPEN,
      modal
    });
  };
}

export function setModalVisibility(visibility) {
  return (dispatch) => {
    dispatch({
      type: C.SET_MODAL_VISIBILITY,
      visibility
    });
  };
}
