import { createReducer, createAction } from '@reduxjs/toolkit';

const MODAL_DONE_TASK = {
  open: 'newDoneModal/open',
  close: 'newDoneModal/close',
};

// Actions
export const openDoneModal = createAction(MODAL_DONE_TASK.open);
export const closeDoneModal = createAction(MODAL_DONE_TASK.close);

const initialState: { visible: boolean } = { visible: false };

// Reducers
const modalDoneTaskReducer = createReducer(initialState, {
  [MODAL_DONE_TASK.open]: (state) => {
    state.visible = true;
  },
  [MODAL_DONE_TASK.close]: (state) => {
    state.visible = false;
  },
});

export default modalDoneTaskReducer;
