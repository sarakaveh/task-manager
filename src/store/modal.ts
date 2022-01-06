import { createReducer, createAction } from '@reduxjs/toolkit';

const MODAL = {
  open: 'modal/open',
  close: 'modal/close',
};

// Actions
export const openModal = createAction(MODAL.open);
export const closeModal = createAction(MODAL.close);

const initialState = {
  visible: false,
};

// Reducers
const modalReducer = createReducer(initialState, {
  [MODAL.open]: (state) => {
    state.visible = true;
  },
  [MODAL.close]: (state) => {
    state.visible = false;
  },
});

export default modalReducer;
