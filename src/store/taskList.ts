import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const TASK = {
  add: 'taskList/add',
  edit: 'taskList/edit',
  remove: 'taskList/remove',
};

// Actions
export const addTask = createAction<Omit<Task, 'id'>>(TASK.add);
export const editTask = createAction<Task>(TASK.edit);
export const removeTask = createAction<Task['id']>(TASK.remove);

// Reducers
const taskReducer = createReducer([], {
  [TASK.add]: (state, { payload }) => {
    const newTask = { ...payload };
    newTask.id = 123123;
    state.push(newTask);
  },
});

export default taskReducer;
