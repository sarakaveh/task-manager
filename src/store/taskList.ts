import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const TASK = {
  add: 'taskList/add',
  edit: 'taskList/edit',
  remove: 'taskList/remove',
};

// Actions
export const addTask = createAction<Omit<Task, 'id'>>(TASK.add);
export const editTask = createAction<{
  id: Task['id'];
  data: Omit<Task, 'id'>;
}>(TASK.edit);
export const removeTask = createAction<Task['id']>(TASK.remove);

// Reducers
const taskReducer = createReducer([], {
  [TASK.add]: (state, { payload }) => {
    const newTask = { ...payload };
    newTask.id = state.length + 1;
    state.push(newTask);
  },
  [TASK.edit]: (state, { payload }) => {
    const { id, data } = payload;
    const i = state.findIndex((task) => task.id === id);
    state[i] = data;
  },
});

export default taskReducer;
