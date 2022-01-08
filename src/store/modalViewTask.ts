import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const VIEW_MODAL = {
  open: 'viewModal/open',
  close: 'viewModal/close',
};

// Actions
export const openViewModal = createAction<{ data: Task }>(VIEW_MODAL.open);
export const closeViewModal = createAction(VIEW_MODAL.close);

const initialState: { visible: boolean; data: Task } = {
  visible: false,
  data: {
    id: undefined,
    title: '',
    description: '',
    giftsKPI: '',
    priority: 'low',
  },
};

// Reducers
const modalViewTaskReducer = createReducer(initialState, {
  [VIEW_MODAL.open]: (state, { payload }) => {
    state.visible = true;
    state.data = payload.data;
  },
  [VIEW_MODAL.close]: (state) => {
    state.visible = false;
  },
});

export default modalViewTaskReducer;
