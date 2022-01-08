import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const MODAL = {
  open: 'newTaskModal/open',
  close: 'newTaskModal/close',
};

// Actions
export const openModal = createAction<
  { data?: Task; mode: 'new' | 'edit' } | undefined
>(MODAL.open);
export const closeModal = createAction(MODAL.close);

const initialState: { visible: boolean; mode: 'new' | 'edit'; data: Task } = {
  visible: false,
  mode: 'new',
  data: {
    id: undefined,
    title: '',
    description: '',
    giftsKPI: '',
    priority: 'low',
  },
};

// Reducers
const modalNewTaskReducer = createReducer(initialState, {
  [MODAL.open]: (state, { payload }) => {
    state.mode = payload.mode;
    if (payload.mode === 'edit') {
      state.data = payload.data;
    } else {
      state.data = { ...initialState.data };
    }
    state.visible = true;
  },
  [MODAL.close]: (state) => {
    state.visible = false;
    state.mode = 'new';
  },
});

export default modalNewTaskReducer;
