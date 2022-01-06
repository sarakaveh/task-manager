import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const TASK = {
  add: 'taskList/add',
  edit: 'taskList/edit',
  remove: 'taskList/remove',
};

// Actions
export const addTask = createAction<Task>(TASK.add);
export const editTask = createAction<Task>(TASK.edit);
export const removeTask = createAction<Task['id']>(TASK.remove);

// Reducers
const taskReducer = createReducer([], {
  [TASK.add]: (state, { payload }) => {
    state.push(payload);
  },
});

export default taskReducer;
